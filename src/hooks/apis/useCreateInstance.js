import { useMutation, useQueryClient } from 'react-query';
import useApi from './useApi';

const postInstance = async (postData) => {
  const apiRequest = useApi();
  const { data } = await apiRequest.post(
    '/api/rhacs/v1/centrals?async=true',
    postData
  );
  return data;
};

export default function useCreateInstance() {
  const queryClient = useQueryClient();
  return useMutation(postInstance, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('instances');
    },
  });
}
