/* eslint-disable react/prop-types */
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
import React, { ReactElement, useState } from 'react';
import SelectSingle from '../../components/SelectSingle';

export type CreateInstanceFormValues = {
  name: string;
  cloud_provider: string;
  region: string;
  availabilityZones: string;
};

type CreateInstanceModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onRequestCreate: (values: CreateInstanceFormValues) => Promise<any>;
};

const defaultFormValues = {
  name: '',
  cloud_provider: 'aws',
  region: 'us-east-1',
  availabilityZones: 'multi',
};

function CreateInstanceModal({ isOpen, onClose, onRequestCreate }: CreateInstanceModalProps): ReactElement {
  const [error, setError] = useState(null);
  const [formValues, setFormValues] =
    useState<CreateInstanceFormValues>(defaultFormValues);
  const [isRequestingCreate, setIsRequestingCreate] = useState(false);

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

  function onInputChange(value) {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      name: value,
    }));
  }

  async function onRequestCreateHandler() {
    setIsRequestingCreate(true);
    const result = await onRequestCreate(formValues);
    setIsRequestingCreate(false);
    if (result instanceof Error) {
      setError(result);
    } else {
      setFormValues(defaultFormValues);
      onClose();
    }
  }

  return (
    <Modal
      variant={ModalVariant.small}
      title="Create ACS instance"
      isOpen={isOpen}
      onClose={onClose}
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
          onClick={onClose}
          isDisabled={isRequestingCreate}
        >
          Cancel
        </Button>,
      ]}
    >
      {error && (
        <div className="pf-u-mb-md">
          <Alert variant="danger" title={error.message} />
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
            onChange={onInputChange}
          />
        </FormGroup>
        <FormGroup label="Cloud provider" isRequired fieldId="cloud_provider">
          <Tile
            title="Amazon Web Services"
            isSelected={formValues.cloud_provider === 'aws'}
          />
        </FormGroup>
        <FormGroup label="Cloud region" isRequired fieldId="region">
          <SelectSingle
            id="region"
            value={formValues.region}
            handleSelect={onCloudRegionSelect}
          >
            <SelectOption value="us-east-1">US-East, N. Virginia</SelectOption>
            <SelectOption value="eu-west-1">EU-Ireland</SelectOption>
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
