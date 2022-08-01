import { useEffect, useState } from 'react';

function useTableSort({ sortFields, defaultSortOption }) {
  const [sortOption, setSortOption] = useState();

  const activeSortField = sortOption?.field || defaultSortOption.field;
  const activeSortDirection =
    sortOption?.direction || defaultSortOption.direction;

  // we'll use this to map the sort fields to an id PatternFly can use internally
  const [fieldToIdMap, setFieldToIdMap] = useState({});

  // we'll construct a map of sort fields to ids that will make it easier to work with
  // PatternFly
  useEffect(() => {
    const newFieldToIdMap = sortFields.reduce((acc, curr, index) => {
      acc[curr] = index;
      return acc;
    }, {});
    setFieldToIdMap(newFieldToIdMap);
  }, [sortFields]);

  function getSortParams(field) {
    const fieldId = fieldToIdMap[field];
    const activeSortId = activeSortField
      ? fieldToIdMap[activeSortField]
      : undefined;

    return {
      sortBy: {
        index: activeSortId,
        direction: activeSortDirection,
        defaultDirection: 'desc',
      },
      onSort: (_event, _index, direction) => {
        // modify the URL based on the new sort
        const newSortOption = {
          field,
          direction,
        };
        setSortOption(newSortOption);
      },
      columnIndex: fieldId,
    };
  }

  return {
    sortOption: {
      field: activeSortField,
      direction: activeSortDirection,
    },
    getSortParams,
  };
}

export default useTableSort;
