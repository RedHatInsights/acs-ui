import { useQuery } from 'react-query';

import apiRequest from '../../services/apiRequest';

export const queryKey = 'cloud_accounts';

const getCloudAccounts = async () => {
  const { data } = await apiRequest.get(`/api/rhacs/v1/cloud_accounts`);
  return data;
};

export default function useCloudAccounts() {
  return useQuery([queryKey], () => getCloudAccounts());
}
