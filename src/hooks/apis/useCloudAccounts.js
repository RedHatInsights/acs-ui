import { useQuery } from 'react-query';
import useApi from './useApi';

export const queryKey = 'cloud_accounts';

const getCloudAccounts = async (apiRequest) => {
  const { data } = await apiRequest.get(`/api/rhacs/v1/cloud_accounts`);
  return data;
};

export default function useCloudAccounts() {
  const apiRequest = useApi();
  return useQuery([queryKey], () => getCloudAccounts(apiRequest));
}
