import { useMutation, useQueryClient } from 'react-query';
import useApi from './useApi';

export default function useCreateInstance() {
  const queryClient = useQueryClient();
  const apiRequest = useApi();

  const postInstance = async (postData) => {
    const { data } = await apiRequest.post(
      '/api/rhacs/v1/centrals?async=true',
      postData,
    );
    return data;
  };

  return useMutation(postInstance, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('instances');
    },
  });
}
