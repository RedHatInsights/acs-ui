import { regionLabelToValue } from './region';
import { cloudProviderLabelToValue } from './cloudProvider';
import { statusLabelToValue } from './status';

export function filtersToSearchQuery(filters, regionList) {
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
            let comparator = '=';
            if (searchCategory === 'cloud_provider') {
              modifiedSearchValue = cloudProviderLabelToValue(searchValue);
            } else if (searchCategory === 'region') {
              modifiedSearchValue = regionLabelToValue(searchValue, regionList);
            } else if (searchCategory === 'status') {
              modifiedSearchValue = statusLabelToValue(searchValue);
            } else if (
              searchCategory === 'name' ||
              searchCategory === 'owner'
            ) {
              // 'name' and 'owner' fields should do a substring search instead of an exact match
              modifiedSearchValue = `%25${searchValue}%25`;
              comparator = 'LIKE';
            }
            return `${searchCategory} ${comparator} ${modifiedSearchValue}`;
          })
          .join(' or ');
        return `(${searchCategoryResult})`;
      })
      .join(' and ') || '';
  return queries;
}
