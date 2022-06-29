import { useQuery } from 'react-query';

import apiRequest from '../../services/apiRequest';

const getInstanceById = async (instanceId) => {
  const { data } = await apiRequest.get(`/api/rhacs/v1/centrals/${instanceId}`);
  return data;
};

export default function useInstance(instanceId) {
  return useQuery(['instance', instanceId], () => getInstanceById(instanceId));
}
