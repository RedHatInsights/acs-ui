import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  InputGroup,
  Select,
  SelectOption,
  SelectVariant,
  TextInput,
  ToolbarFilter,
  ToolbarGroup,
  ToolbarItem,
  ToolbarToggleGroup,
} from '@patternfly/react-core';
import { FilterIcon, SearchIcon } from '@patternfly/react-icons';

import { regionOptions } from '../../utils/region';
import { statusOptions } from '../../utils/status';
import SelectSingle from '../../components/SelectSingle';

function InstancesToolbarSearchFilter({ filters, setFilters }) {
  const [selectedFilter, setSelectedFilter] = useState('Name');
  // local state for input values
  const [inputName, setInputName] = useState('');
  const [inputOwner, setInputOwner] = useState('');
  // local state for Select isExpanded values
  // @TODO: We can refactor the SelectSingle component to be more reusable for the usecase in this component as well. Then we don't need to keep this state here.
  const [isRegionExpanded, setIsRegionExpanded] = useState(false);
  const [isStatusExpanded, setIsStatusExpanded] = useState(false);

  // TODO: Extract into separate utils file to be reused in other cases
  function onDeleteChip(type = '', id = '') {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      const newValue = newFilters[type.toLowerCase()].filter((s) => s !== id);
      if (newValue?.length === 0) {
        delete newFilters[type.toLowerCase()];
      } else {
        newFilters[type.toLowerCase()] = newValue;
      }
      return newFilters;
    });
  }

  // TODO: Extract into separate utils file to be reused in other cases
  function onDeleteChipGroup(type) {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      delete newFilters[type.toLowerCase()];
      return newFilters;
    });
  }

  // TODO: Extract into separate utils file to be reused in other cases
  function onSelect(type, event, selection) {
    const checked = event.target.checked;
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      const prevSelections = prevFilters[type] || [];
      const newValue = checked
        ? [...prevSelections, selection]
        : prevSelections.filter((value) => value !== selection);
      if (newValue.length === 0) {
        delete newFilters[type];
      } else {
        newFilters[type] = newValue;
      }
      return newFilters;
    });
  }

  function onRegionSelect(event, selection) {
    onSelect('region', event, selection);
  }

  function onStatusSelect(event, selection) {
    onSelect('status', event, selection);
  }

  return (
    <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl">
      <ToolbarGroup variant="filter-group">
        <ToolbarItem>
          <SelectSingle
            id="region"
            value={selectedFilter}
            handleSelect={(_, selection) => {
              setSelectedFilter(selection);
            }}
          >
            <SelectOption value="Name">Name</SelectOption>
            <SelectOption value="Region">Region</SelectOption>
            <SelectOption value="Owner">Owner</SelectOption>
            <SelectOption value="Status">Status</SelectOption>
          </SelectSingle>
        </ToolbarItem>
        <ToolbarFilter
          chips={filters.name}
          deleteChip={onDeleteChip}
          deleteChipGroup={onDeleteChipGroup}
          categoryName="Name"
          className={selectedFilter !== 'Name' && 'pf-u-hidden'}
        >
          <ToolbarItem>
            <InputGroup>
              <TextInput
                id="filterName"
                type="text"
                aria-label="Name"
                placeholder="Filter by name"
                value={inputName}
                onChange={(value) => setInputName(value)}
              />
              <Button
                variant="control"
                aria-label="Search Name"
                onClick={() => {
                  if (!inputName) return;
                  setFilters((prevFilters) => {
                    const newFilters = { ...prevFilters };
                    newFilters.name = [inputName];
                    return newFilters;
                  });
                }}
              >
                <SearchIcon />
              </Button>
            </InputGroup>
          </ToolbarItem>
        </ToolbarFilter>
        <ToolbarFilter
          chips={filters.region}
          deleteChip={onDeleteChip}
          deleteChipGroup={onDeleteChipGroup}
          categoryName="Region"
          className={selectedFilter !== 'Region' && 'pf-u-hidden'}
        >
          <ToolbarItem>
            <Select
              variant={SelectVariant.checkbox}
              aria-label="Region"
              onToggle={setIsRegionExpanded}
              onSelect={onRegionSelect}
              selections={filters.region}
              isOpen={isRegionExpanded}
              placeholderText="Filter by region"
            >
              {regionOptions.map((regionOption) => {
                return (
                  <SelectOption
                    key={regionOption.label}
                    value={regionOption.label}
                  >
                    {regionOption.label}
                  </SelectOption>
                );
              })}
            </Select>
          </ToolbarItem>
        </ToolbarFilter>
        <ToolbarFilter
          chips={filters.owner}
          deleteChip={onDeleteChip}
          deleteChipGroup={onDeleteChipGroup}
          categoryName="Owner"
          className={selectedFilter !== 'Owner' && 'pf-u-hidden'}
        >
          <ToolbarItem>
            <InputGroup>
              <TextInput
                id="filterOwner"
                type="text"
                aria-label="Owner"
                placeholder="Filter by owner"
                value={inputOwner}
                onChange={(value) => setInputOwner(value)}
              />
              <Button
                variant="control"
                aria-label="Search Owner"
                onClick={() => {
                  if (!inputOwner) return;
                  setFilters((prevFilters) => {
                    const newFilters = { ...prevFilters };
                    newFilters.owner = [inputOwner];
                    return newFilters;
                  });
                }}
              >
                <SearchIcon />
              </Button>
            </InputGroup>
          </ToolbarItem>
        </ToolbarFilter>
        <ToolbarFilter
          chips={filters.status}
          deleteChip={onDeleteChip}
          deleteChipGroup={onDeleteChipGroup}
          categoryName="Status"
          className={selectedFilter !== 'Status' && 'pf-u-hidden'}
        >
          <ToolbarItem>
            <Select
              variant={SelectVariant.checkbox}
              aria-label="Status"
              onToggle={setIsStatusExpanded}
              onSelect={onStatusSelect}
              selections={filters.status}
              isOpen={isStatusExpanded}
              placeholderText="Filter by status"
            >
              {statusOptions.map((statusOption) => {
                return (
                  <SelectOption
                    key={statusOption.label}
                    value={statusOption.label}
                  >
                    {statusOption.label}
                  </SelectOption>
                );
              })}
            </Select>
          </ToolbarItem>
        </ToolbarFilter>
      </ToolbarGroup>
    </ToolbarToggleGroup>
  );
}

InstancesToolbarSearchFilter.propTypes = {
  filters: PropTypes.shape({
    name: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }),
  setFilters: PropTypes.func.isRequired,
};

export default InstancesToolbarSearchFilter;
