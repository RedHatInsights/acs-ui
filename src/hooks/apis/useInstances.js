import { useQuery } from 'react-query';

import apiRequest from '../../services/apiRequest';
import { getQueryString } from '../../utils/queryString';

const getInstances = async ({ query }) => {
  const queryString = getQueryString(query);
  const { data } = await apiRequest.get(
    `/api/rhacs/v1/centrals?${queryString}`
  );
  return data;
};

export default function useInstances(options) {
  const { refetchInterval } = options;
  return useQuery(['instances', options], () => getInstances(options), {
    refetchInterval,
  });
}
