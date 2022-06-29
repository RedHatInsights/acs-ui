/* eslint-disable react/prop-types */
import {
  Button,
  Form,
  FormGroup,
  HelperText,
  HelperTextItem,
  Modal,
  ModalVariant,
  TextInput,
} from '@patternfly/react-core';
import React, { ReactElement, useState } from 'react';
import { Instance } from '../../hooks/apis/useInstances';

type DeleteInstanceModalProps = {
  isOpen: boolean;
  instance: Instance; // @TODO: make actual type
  onRequestDelete: (instanceId: string) => Promise<any>;
  onClose: () => void;
}

function DeleteInstanceModal({ isOpen, instance, onRequestDelete, onClose }: DeleteInstanceModalProps): ReactElement {
  const [inputValue, setInputValue] = useState('');
  const [isRequestingDelete, setIsRequestingDelete] = useState(false);

  async function onRequestDeleteHandler() {
    setIsRequestingDelete(true);
    const result = await onRequestDelete(instance.id);
    setIsRequestingDelete(false);
    if (result.error) {
      // Do something
    } else {
      setInputValue('');
      onClose();
    }
  }

  if (!instance) return null;

  return (
    <Modal
      variant={ModalVariant.small}
      title="Delete instance?"
      isOpen={isOpen}
      onClose={onClose}
      actions={[
        <Button
          key="createInstance"
          variant="danger"
          onClick={onRequestDeleteHandler}
          isLoading={isRequestingDelete}
          isDisabled={isRequestingDelete || instance.name !== inputValue}
        >
          Delete instance
        </Button>,
        <Button
          key="cancel"
          variant="link"
          onClick={onClose}
          isDisabled={isRequestingDelete}
        >
          Cancel
        </Button>,
      ]}
    >
      <div className="pf-u-pb-md">
        <div>
          This will permanently delete{' '}
          <span className="pf-u-font-weight-bold">{instance.name}</span>.
        </div>
        <div>This action cannot be undone.</div>
      </div>
      <Form>
        <FormGroup
          label="Confirmation"
          isRequired
          fieldId="confirmationInstanceName"
        >
          <TextInput
            isRequired
            type="text"
            id="confirmationInstanceName"
            name="confirmationInstanceName"
            value={inputValue}
            onChange={setInputValue}
          />
        </FormGroup>
        <HelperText>
          <HelperTextItem>
            Type <span className="pf-u-font-weight-bold">{instance.name}</span>{' '}
            to confirm.
          </HelperTextItem>
        </HelperText>
      </Form>
    </Modal>
  );
}

export default DeleteInstanceModal;
