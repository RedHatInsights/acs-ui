/* eslint-disable react/prop-types */
import {
  Button,
  Form,
  FormGroup,
  Modal,
  ModalVariant,
  TextContent,
  Text,
  TextVariants,
  SelectOption,
} from '@patternfly/react-core';
import React, { useState } from 'react';

import SelectSingle from '../../components/SelectSingle';

function ChangeOwnerModal({
  isOpen,
  changingOwner,
  possibleOwners,
  onRequestChangeOwner,
  onClose,
}) {
  const [newOwner, setNewOwner] = useState('');
  const [isRequestingChangeOwner, setIsRequestingChangeOwner] = useState(false);

  if (!changingOwner) return null;

  async function onRequestChangeOwnerHandler() {
    setIsRequestingChangeOwner(true);
    const result = await onRequestChangeOwner(newOwner);
    setIsRequestingChangeOwner(false);
    if (result.error) {
      // Do something
    } else {
      setNewOwner('');
      onClose();
    }
  }

  function onNewOwnerSelect(id, selection) {
    setNewOwner(selection);
  }

  return (
    <Modal
      style={{ overflow: 'inherit' }}
      variant={ModalVariant.small}
      title="Change owner"
      isOpen={isOpen}
      onClose={onClose}
      actions={[
        <Button
          key="changeOwner"
          variant="primary"
          onClick={onRequestChangeOwnerHandler}
          isLoading={isRequestingChangeOwner}
          isDisabled={isRequestingChangeOwner || !newOwner}
        >
          Change owner
        </Button>,
        <Button
          key="cancel"
          variant="link"
          onClick={onClose}
          isDisabled={isRequestingChangeOwner}
        >
          Cancel
        </Button>,
      ]}
    >
      <Form>
        <FormGroup label="Current owner" fieldId="currentOwner">
          <TextContent>
            <Text component={TextVariants.p}>
              {changingOwner.instance.owner}
            </Text>
          </TextContent>
        </FormGroup>
        <FormGroup label="New Owner" isRequired fieldId="newOwner">
          <SelectSingle
            id="newOwner"
            value={newOwner}
            handleSelect={onNewOwnerSelect}
            placeholderText="Select new owner..."
          >
            {possibleOwners.map((owner) => (
              <SelectOption key={owner} value={owner}>
                {owner}
              </SelectOption>
            ))}
          </SelectSingle>
        </FormGroup>
      </Form>
    </Modal>
  );
}

export default ChangeOwnerModal;
