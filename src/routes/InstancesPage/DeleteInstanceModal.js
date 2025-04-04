/* eslint-disable react/prop-types */
import { Alert } from '@patternfly/react-core/dist/dynamic/components/Alert';
import { AlertVariant } from '@patternfly/react-core/dist/dynamic/components/Alert';
import { Button } from '@patternfly/react-core/dist/dynamic/components/Button';
import { Form } from '@patternfly/react-core/dist/dynamic/components/Form';
import { FormGroup } from '@patternfly/react-core/dist/dynamic/components/Form';
import { HelperText } from '@patternfly/react-core/dist/dynamic/components/HelperText';
import { HelperTextItem } from '@patternfly/react-core/dist/dynamic/components/HelperText';
import { TextInput } from '@patternfly/react-core/dist/dynamic/components/TextInput';
import { Modal, ModalVariant } from '@patternfly/react-core/deprecated';
import React, { useState } from 'react';

import useAnalytics from '../../hooks/useAnalytics';

function DeleteInstanceModal({ isOpen, instance, onRequestDelete, onClose }) {
  const [inputValue, setInputValue] = useState('');
  const [isRequestingDelete, setIsRequestingDelete] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { analyticsTrack } = useAnalytics();

  async function onRequestDeleteHandler() {
    setIsRequestingDelete(true);
    setErrorMessage('');
    analyticsTrack('delete-instance-form-submitted');
    const result = await onRequestDelete(instance.id);
    setIsRequestingDelete(false);
    if (result.isAxiosError) {
      setErrorMessage(
        result.message ||
          'An unanticipated error occurred. Please try again. If this error persists, please contact support.'
      );
    } else {
      setInputValue('');
      onClose();
    }
  }

  function deleteInstanceOnSubmit(e) {
    e.preventDefault();
    if (inputMatchesInstanceName()) {
      onRequestDeleteHandler();
    }
  }

  function inputMatchesInstanceName() {
    return instance.name === inputValue;
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
          isDisabled={isRequestingDelete || !inputMatchesInstanceName()}
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
      <div className="pf-v6-u-pb-md">
        <div>
          This will permanently delete{' '}
          <span className="pf-v6-u-font-weight-bold">{instance.name}</span>.
        </div>
        <div>This action cannot be undone.</div>
      </div>
      <Form onSubmit={deleteInstanceOnSubmit}>
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
            onChange={(_event, val) => setInputValue(val)}
          />
        </FormGroup>
        <HelperText>
          <HelperTextItem>
            Type{' '}
            <span className="pf-v6-u-font-weight-bold">{instance.name}</span> to
            confirm.
          </HelperTextItem>
        </HelperText>
        {errorMessage.length > 0 && (
          <Alert isInline variant={AlertVariant.danger} title={errorMessage} />
        )}
      </Form>
    </Modal>
  );
}

export default DeleteInstanceModal;
