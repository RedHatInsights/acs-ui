/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from 'react';
import {
  Alert,
  Button,
  Form,
  FormGroup,
  FormHelperText,
  HelperText,
  HelperTextItem,
  Modal,
  ModalVariant,
  TextInput,
} from '@patternfly/react-core';

import useAnalytics from '../../hooks/useAnalytics';
import { useCloudRegions } from '../../hooks/apis/useCloudRegions';
import { AWS_DEFAULT_REGION, AWS_PROVIDER } from '../../utils/cloudProvider';
import { getRegionDisplayName } from '../../utils/region';
import { SimpleSelect } from '@patternfly/react-templates';

const defaultFormValues = {
  name: '',
  // this value is left out of the form because no other options are available to the user (ROX-18865)
  cloud_provider: AWS_PROVIDER,
  region: AWS_DEFAULT_REGION,
  // this value is left out of the form because no other options are available to the user (ROX-18865)
  availabilityZones: 'multi',
  cloud_account_id: '',
};

function CreateInstanceModal({
  isOpen,
  onClose,
  onRequestCreate,
  cloudAccountIds,
}) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [isRequestingCreate, setIsRequestingCreate] = useState(false);
  const { analyticsTrack } = useAnalytics();

  // default select a cloud account if there is only one available
  // @TODO: Make a test for this
  useEffect(() => {
    if (formValues.cloud_account_id === '' && cloudAccountIds.length === 1) {
      setFormValues((prevValues) => {
        return { ...prevValues, cloud_account_id: cloudAccountIds[0] };
      });
    }
  }, [cloudAccountIds]);

  const { data: cloudRegionList, isFetching: isFetchingRegions } =
    useCloudRegions({
      provider: AWS_PROVIDER,
    });
  const cloudRegions = useMemo(
    () => cloudRegionList?.items || [],
    [cloudRegionList]
  );
  const enabledCloudRegions = useMemo(
    () => cloudRegions.filter((r) => r.enabled),
    [cloudRegions]
  );

  function onCloseHandler() {
    // clear all state before closing
    setErrorMessage(null);
    setFormValues(defaultFormValues);
    setIsRequestingCreate(false);
    onClose();
  }

  async function onRequestCreateHandler() {
    analyticsTrack('create-instance-form-submitted');
    setIsRequestingCreate(true);
    const result = await onRequestCreate(formValues);
    setIsRequestingCreate(false);
    if (result instanceof Error) {
      const errorMessage = result.response.data.reason;
      setErrorMessage(errorMessage);
    } else {
      setFormValues(defaultFormValues);
      onClose();
    }
  }

  function onCloudRegionSelect(selection) {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      region: selection,
    }));
  }

  function onChangeAWSAccountNumber(selection) {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      cloud_account_id: selection,
    }));
  }

  function onNameChange(value) {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      name: value,
    }));
  }

  function getAWSHelperText() {
    if (cloudAccountIds.length === 0) {
      return 'This will be attributed to your Red Hat subscription.';
    }
    if (cloudAccountIds.length === 1) {
      return 'The AWS account indicated, which is linked to your Red Hat organization, will be used for billing purposes.';
    }
    if (cloudAccountIds.length > 1) {
      return 'Please select one of the AWS accounts for billing purposes.';
    }
    return undefined;
  }

  function isInvalidForm() {
    return (
      !formValues?.name ||
      (cloudAccountIds.length > 1 && !formValues?.cloud_account_id)
    );
  }

  return (
    <Modal
      variant={ModalVariant.small}
      title="Create ACS instance"
      isOpen={isOpen}
      onClose={onCloseHandler}
      actions={[
        <Button
          key="createInstance"
          variant="primary"
          onClick={onRequestCreateHandler}
          isLoading={isRequestingCreate}
          isDisabled={isRequestingCreate || isInvalidForm()}
        >
          Create instance
        </Button>,
        <Button
          key="cancel"
          variant="link"
          onClick={onCloseHandler}
          isDisabled={isRequestingCreate}
        >
          Cancel
        </Button>,
      ]}
    >
      {errorMessage && (
        <div className="pf-v5-u-mb-md">
          <Alert variant="danger" title={errorMessage} />
        </div>
      )}
      <Form>
        <FormGroup label="Name" isRequired fieldId="name">
          <TextInput
            isRequired
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={(_event, value) => onNameChange(value)}
          />
          <FormHelperText>
            <HelperText>
              <HelperTextItem>
                Must start with a letter and end with a letter or number. Valid
                characters include lowercase letters from a to z, numbers from 0
                to 9, and hyphens ( - ).
              </HelperTextItem>
            </HelperText>
          </FormHelperText>
        </FormGroup>
        <FormGroup
          label="AWS account number"
          isRequired={cloudAccountIds.length > 1}
          fieldId="cloud_account_id"
        >
          <SimpleSelect
            id="cloud_account_id"
            toggleWidth="100%"
            initialOptions={cloudAccountIds.map((id) => ({
              content: id,
              value: id,
              selected: formValues.cloud_account_id === id,
            }))}
            onSelect={(_ev, selection) => onChangeAWSAccountNumber(selection)}
            placeholder="Select an AWS Account"
            isDisabled={cloudAccountIds.length <= 1}
            popperProps={{ appendTo: 'inline' }}
          />
          <FormHelperText>
            <HelperText>
              <HelperTextItem>{getAWSHelperText()}</HelperTextItem>
            </HelperText>
          </FormHelperText>
        </FormGroup>
        <FormGroup label="Cloud region" isRequired fieldId="region">
          <SimpleSelect
            id="region"
            toggleWidth="100%"
            selected={formValues.region}
            initialOptions={[
              {
                content: 'Choose a region',
                value: '',
                selected: false,
                isDisabled: true,
              },
              ...enabledCloudRegions.map((region) => ({
                content: getRegionDisplayName(region),
                value: region.id,
                selected: formValues.region === region.id,
              })),
            ]}
            onSelect={(_ev, selection) => onCloudRegionSelect(selection)}
            isDisabled={isFetchingRegions}
            popperProps={{ appendTo: () => document.body }}
          />
        </FormGroup>
      </Form>
    </Modal>
  );
}

export default CreateInstanceModal;
