/* eslint-disable react/prop-types */
import {
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
import React, { useState } from 'react';
import SelectSingle from '../../components/SelectSingle';

const defaultFormValues = {
  name: '',
  cloudProvider: 'Amazon Web Services',
  cloudRegion: 'US-East',
  availabilityZones: 'multi',
  owner: 'bob@redhat.com',
  status: 'READY',
  timeCreated: new Date(),
};

function CreateInstanceModal({ isOpen, onClose, onRequestCreate }) {
  const [formValues, setFormValues] = useState(defaultFormValues);
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
      cloudRegion: selection,
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
    if (result.error) {
      // Do something
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
        <FormGroup label="Cloud provider" isRequired fieldId="cloudProvider">
          <Tile
            title="Amazon Web Services"
            isSelected={formValues.cloudProvider === 'Amazon Web Services'}
          />
        </FormGroup>
        <FormGroup label="Cloud region" isRequired fieldId="cloudRegion">
          <SelectSingle
            id="cloudRegion"
            value={formValues.cloudRegion}
            handleSelect={onCloudRegionSelect}
            isDisabled
          >
            <SelectOption value="US-East">US-East, N. Virginia</SelectOption>
            <SelectOption value="EU-Ireland">EU-Ireland</SelectOption>
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
