import { useQuery } from 'react-query';

import apiRequest from '../../services/apiRequest';

const getInstances = async () => {
  const { data } = await apiRequest.get('/api/dinosaurs_mgmt/v1/dinosaurs');
  return data;
};

export default function useInstances() {
  return useQuery('instances', getInstances);
}
