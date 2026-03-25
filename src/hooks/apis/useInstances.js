import { useQuery } from '@tanstack/react-query';

import { getQueryString } from '../../utils/queryString';
import useApi from './useApi';

const getInstances = async (apiRequest, { query }) => {
  const queryString = getQueryString(query);
  const { data } = await apiRequest.get(
    `/api/rhacs/v1/centrals?${queryString}`,
  );
  return data;
};

export default function useInstances(options) {
  const { refetchInterval } = options;
  const apiRequest = useApi();
  return useQuery({
    queryKey: ['instances', options],
    queryFn: () => getInstances(apiRequest, options),
    refetchInterval,
  });
}
