/* eslint-disable react/prop-types */
import React, { ReactElement, useState } from 'react';
import { OUIAProps, Select, SelectProps, SelectVariant } from '@patternfly/react-core';

type SelectSingleProps = {
  toggleIcon?: SelectProps["toggleIcon"];
  id: SelectProps["id"];
  value: SelectProps["value"];
  handleSelect: (id, selection) => void;
  isDisabled?: SelectProps["isDisabled"];
  children: SelectProps["children"];
  direction?: SelectProps["direction"];
  isCreatable?: SelectProps["isCreatable"];
  variant?: SelectProps["variant"];
  placeholderText?: SelectProps["placeholderText"];
};

function SelectSingle({
  toggleIcon = null,
  id,
  value,
  handleSelect,
  isDisabled = false,
  children,
  direction = "down",
  isCreatable = false,
  variant = null,
  placeholderText = "",
}: SelectSingleProps): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const isTypeahead =
    variant === "typeahead" ? SelectVariant.typeahead : SelectVariant.single;

  function onSelect(_event, selection) {
    // The mouse event is not useful.
    setIsOpen(false);
    handleSelect(id, selection);
  }

  return (
    <Select
      variant={isTypeahead}
      toggleIcon={toggleIcon}
      id={id}
      isDisabled={isDisabled}
      isOpen={isOpen}
      onSelect={onSelect}
      onToggle={setIsOpen}
      selections={value}
      direction={direction}
      isCreatable={isCreatable}
      placeholderText={placeholderText}
      toggleId={id}
    >
      {children}
    </Select>
  );
}

export default SelectSingle;
