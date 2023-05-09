import { useQuery } from 'react-query';

import { getQueryString } from '../../utils/queryString';
import useApi from './useApi';

export const queryKey = (query) => ['cloud_regions', query];

const getCloudRegions = async (apiRequest, { provider, instanceType }) => {
  const queryString = getQueryString({ instance_type: instanceType });
  const { data } = await apiRequest.get(
    `/api/rhacs/v1/cloud_providers/${provider}/regions?${queryString}`
  );
  return data;
};

export const useCloudRegions = (query, options) => {
  const apiRequest = useApi();
  return useQuery(queryKey(query), () => getCloudRegions(apiRequest, query), {
    // Those regions are not going to change very often, so we can cache them for a long time.
    // Worst case, a good old browser refresh will fix an outdated region list.
    staleTime: Infinity,
    ...options,
  });
};
