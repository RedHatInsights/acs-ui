import { useMutation, useQueryClient } from '@tanstack/react-query';
import useApi from './useApi';

export default function useDeleteInstance() {
  const queryClient = useQueryClient();
  const apiRequest = useApi();
  const deleteInstance = async (instanceID) => {
    const { data } = await apiRequest.delete(
      `/api/rhacs/v1/centrals/${instanceID}?async=true`,
    );
    return data;
  };
  return useMutation({
    mutationFn: deleteInstance,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('instances');
    },
  });
}
