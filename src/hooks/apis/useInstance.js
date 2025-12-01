import { useQuery } from 'react-query';

import useApi from './useApi';

const getInstanceById = async (apiRequest, instanceId) => {
  const { data } = await apiRequest.get(`/api/rhacs/v1/centrals/${instanceId}`);
  return data;
};

export default function useInstance(instanceId) {
  const apiRequest = useApi();
  return useQuery(['instance', instanceId], () =>
    getInstanceById(apiRequest, instanceId),
  );
}
