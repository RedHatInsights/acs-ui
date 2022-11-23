/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Modal,
  ModalVariant,
  SelectOption,
  TextInput,
  Tile,
  ToggleGroup,
  ToggleGroupItem,
} from '@patternfly/react-core';

import { regionOptions } from '../../utils/region';
import SelectSingle from '../../components/SelectSingle';

const defaultFormValues = {
  name: '',
  cloud_provider: 'aws',
  region: 'us-east-1',
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

  // default select a cloud account if there is only one available
  // @TODO: Make a test for this
  useEffect(() => {
    if (formValues.cloud_account_id === '' && cloudAccountIds.length === 1) {
      setFormValues((prevValues) => {
        return { ...prevValues, cloud_account_id: cloudAccountIds[0] };
      });
    }
  }, [cloudAccountIds]);

  function onCloseHandler() {
    // clear all state before closing
    setErrorMessage(null);
    setFormValues(defaultFormValues);
    setIsRequestingCreate(false);
    onClose();
  }

  async function onRequestCreateHandler() {
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

  function onChangeAvailabilityZones(isSelected, event) {
    const { id } = event.currentTarget;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      availabilityZones: id,
    }));
  }

  function onCloudRegionSelect(id, selection) {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      region: selection,
    }));
  }

  function onChangeAWSAccountNumber(id, selection) {
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
          isDisabled={isRequestingCreate || !formValues?.name}
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
        <div className="pf-u-mb-md">
          <Alert variant="danger" title={errorMessage} />
        </div>
      )}
      <Form>
        <FormGroup
          label="Name"
          isRequired
          fieldId="name"
          helperText="Must start with a letter and end with a letter or number. Valid characters include lowercase letters from a to z, numbers from 0 to 9, and hyphens ( - )."
        >
          <TextInput
            isRequired
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={onNameChange}
          />
        </FormGroup>
        <FormGroup label="Cloud provider" isRequired fieldId="cloud_provider">
          <Tile
            title="Amazon Web Services"
            isSelected={formValues.cloud_provider === 'aws'}
          />
        </FormGroup>
        <FormGroup label="AWS account number" fieldId="cloud_account_id">
          <SelectSingle
            id="cloud_account_id"
            value={formValues.cloud_account_id}
            handleSelect={onChangeAWSAccountNumber}
            placeholderText={
              cloudAccountIds.length === 0
                ? 'No accounts available'
                : 'Select an AWS Account'
            }
            menuAppendTo="parent"
            isDisabled={cloudAccountIds.length === 0}
          >
            {cloudAccountIds.map((cloudAccountId) => {
              return (
                <SelectOption key={cloudAccountId} value={cloudAccountId}>
                  {cloudAccountId}
                </SelectOption>
              );
            })}
          </SelectSingle>
        </FormGroup>
        <FormGroup label="Cloud region" isRequired fieldId="region">
          <SelectSingle
            id="region"
            value={formValues.region}
            handleSelect={onCloudRegionSelect}
          >
            {regionOptions.map((region) => {
              return (
                <SelectOption key={region.value} value={region.value}>
                  {region.label}
                </SelectOption>
              );
            })}
          </SelectSingle>
        </FormGroup>
        <FormGroup
          label="Availability zones"
          isRequired
          fieldId="availabilityZones"
        >
          <ToggleGroup aria-label="Availability Zones">
            <ToggleGroupItem
              text="Single"
              buttonId="single"
              isSelected={formValues.availabilityZones === 'single'}
              onChange={onChangeAvailabilityZones}
              isDisabled
            />
            <ToggleGroupItem
              text="Multi"
              buttonId="multi"
              isSelected={formValues.availabilityZones === 'multi'}
              onChange={onChangeAvailabilityZones}
            />
          </ToggleGroup>
        </FormGroup>
      </Form>
    </Modal>
  );
}

export default CreateInstanceModal;
