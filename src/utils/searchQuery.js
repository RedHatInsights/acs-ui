import { regionLabelToValue } from './region';
import { cloudProviderLabelToValue } from './cloudProvider';
import { statusLabelToValue } from './status';

export function filtersToSearchQuery(filters) {
  const searchCategories = Object.keys(filters);
  const queries =
    searchCategories
      .filter((searchCategory) => {
        const searchValues = filters[searchCategory];
        return searchValues.length;
      })
      .map((searchCategory) => {
        const searchValues = filters[searchCategory];
        const searchCategoryResult = searchValues
          .map((searchValue) => {
            // Use the value the API needs rather than the human readable UI value
            let modifiedSearchValue = searchValue;
            if (searchCategory === 'cloud_provider') {
              modifiedSearchValue = cloudProviderLabelToValue(searchValue);
            } else if (searchCategory === 'region') {
              modifiedSearchValue = regionLabelToValue(searchValue);
            } else if (searchCategory === 'status') {
              modifiedSearchValue = statusLabelToValue(searchValue);
            }
            return `${searchCategory} = ${modifiedSearchValue}`;
          })
          .join(' or ');
        return `(${searchCategoryResult})`;
      })
      .join(' and ') || '';
  return queries;
}
