import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Badge,
  Button,
  InputGroup,
  InputGroupItem,
  TextInput,
  ToolbarFilter,
  ToolbarGroup,
  ToolbarItem,
  ToolbarToggleGroup,
} from '@patternfly/react-core';
import { FilterIcon, SearchIcon } from '@patternfly/react-icons';
import { CheckboxSelect, SimpleSelect } from '@patternfly/react-templates';

import { statusOptions } from '../../utils/status';
import { useCloudRegions } from '../../hooks/apis/useCloudRegions';
import { AWS_PROVIDER } from '../../utils/cloudProvider';
import { getRegionDisplayName } from '../../utils/region';

const filterTypeOptions = ['Name', 'Region', 'Owner', 'Status'];

function InstancesToolbarSearchFilter({ filters, setFilters }) {
  const [selectedFilter, setSelectedFilter] = useState('Name');
  // local state for input values
  const [inputName, setInputName] = useState('');
  const [inputOwner, setInputOwner] = useState('');

  const { data: cloudRegionList } = useCloudRegions({ provider: AWS_PROVIDER });
  const cloudRegions = useMemo(
    () => cloudRegionList?.items || [],
    [cloudRegionList]
  );

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

  function applyCurrentSearchText(field, input, setInput) {
    if (!input) return;

    setFilters((prevFilters) => {
      const newFilters = structuredClone(prevFilters);
      const fieldFilters = newFilters[field] ?? [];
      if (!fieldFilters.includes(input)) {
        newFilters[field] = [...fieldFilters, input];
      }
      return newFilters;
    });
    setInput('');
  }

  return (
    <ToolbarToggleGroup toggleIcon={<FilterIcon />} breakpoint="xl">
      <ToolbarGroup variant="filter-group">
        <ToolbarItem>
          <SimpleSelect
            id="region"
            initialOptions={filterTypeOptions.map((o) => ({
              content: o,
              value: o,
              selected: selectedFilter === o,
            }))}
            onSelect={(_ev, selection) => setSelectedFilter(selection)}
          />
        </ToolbarItem>
        <ToolbarFilter
          chips={filters.name}
          deleteChip={onDeleteChip}
          deleteChipGroup={onDeleteChipGroup}
          categoryName="Name"
          className={selectedFilter !== 'Name' && 'pf-v5-u-hidden'}
        >
          <ToolbarItem>
            <InputGroup>
              <InputGroupItem isFill>
                <TextInput
                  id="filterName"
                  type="text"
                  aria-label="Name"
                  placeholder="Filter by name"
                  value={inputName}
                  onChange={(_event, value) => setInputName(value)}
                  onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                      applyCurrentSearchText('name', inputName, setInputName);
                    }
                  }}
                />
              </InputGroupItem>
              <InputGroupItem>
                <Button
                  variant="control"
                  aria-label="Search Name"
                  onClick={() => {
                    applyCurrentSearchText('name', inputName, setInputName);
                  }}
                >
                  <SearchIcon />
                </Button>
              </InputGroupItem>
            </InputGroup>
          </ToolbarItem>
        </ToolbarFilter>
        <ToolbarFilter
          chips={filters.region}
          deleteChip={onDeleteChip}
          deleteChipGroup={onDeleteChipGroup}
          categoryName="Region"
          className={selectedFilter !== 'Region' && 'pf-v5-u-hidden'}
        >
          <ToolbarItem>
            <CheckboxSelect
              toggleWidth="230px"
              toggleContent={
                <>
                  Filter by region
                  {filters?.region?.length > 0 && (
                    <Badge isRead className="pf-v5-u-ml-sm">
                      {filters.region.length}
                    </Badge>
                  )}
                </>
              }
              initialOptions={cloudRegions.map((option) => ({
                content: getRegionDisplayName(option),
                value: option.id,
                selected: filters?.region?.includes(option.id),
              }))}
              onSelect={onRegionSelect}
            />
          </ToolbarItem>
        </ToolbarFilter>
        <ToolbarFilter
          chips={filters.owner}
          deleteChip={onDeleteChip}
          deleteChipGroup={onDeleteChipGroup}
          categoryName="Owner"
          className={selectedFilter !== 'Owner' && 'pf-v5-u-hidden'}
        >
          <ToolbarItem>
            <InputGroup>
              <InputGroupItem isFill>
                <TextInput
                  id="filterOwner"
                  type="text"
                  aria-label="Owner"
                  placeholder="Filter by owner"
                  value={inputOwner}
                  onChange={(_event, value) => setInputOwner(value)}
                  onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                      applyCurrentSearchText(
                        'owner',
                        inputOwner,
                        setInputOwner
                      );
                    }
                  }}
                />
              </InputGroupItem>
              <InputGroupItem>
                <Button
                  variant="control"
                  aria-label="Search Owner"
                  onClick={() => {
                    applyCurrentSearchText('owner', inputOwner, setInputOwner);
                  }}
                >
                  <SearchIcon />
                </Button>
              </InputGroupItem>
            </InputGroup>
          </ToolbarItem>
        </ToolbarFilter>
        <ToolbarFilter
          chips={filters.status}
          deleteChip={onDeleteChip}
          deleteChipGroup={onDeleteChipGroup}
          categoryName="Status"
          className={selectedFilter !== 'Status' && 'pf-v5-u-hidden'}
        >
          <ToolbarItem>
            <CheckboxSelect
              toggleWidth="230px"
              toggleContent={
                <>
                  Filter by status
                  {filters?.status?.length > 0 && (
                    <Badge isRead className="pf-v5-u-ml-sm">
                      {filters.status.length}
                    </Badge>
                  )}
                </>
              }
              initialOptions={statusOptions.map(({ label }) => ({
                content: label,
                value: label,
                selected: filters?.status?.includes(label),
              }))}
              onSelect={onStatusSelect}
            />
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
