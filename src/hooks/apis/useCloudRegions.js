import { useQuery } from 'react-query';

import apiRequest from '../../services/apiRequest';
import { getQueryString } from '../../utils/queryString';

export const queryKey = (query) => ['cloud_regions', query];

const getCloudRegions = async ({ provider, instanceType }) => {
  const queryString = getQueryString({ instance_type: instanceType });
  const { data } = await apiRequest.get(
    `/api/rhacs/v1/cloud_providers/${provider}/regions?${queryString}`
  );
  return data;
};

export const useCloudRegions = (query, options) => {
  const { enabled, ...rest } = options;
  if (!query.provider) {
    console.error('useCloudRegions: provider is required');
  }
  return useQuery(queryKey(query), () => getCloudRegions(query), {
    // Those regions are not going to change very often, so we can cache them for a long time.
    // Worst case, a good old browser refresh will fix an outdated region list.
    staleTime: Infinity,
    enabled: !!query.provider && enabled,
    ...rest,
  });
};
