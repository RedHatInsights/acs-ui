import { useMutation, useQueryClient } from 'react-query';

import apiRequest from '../../services/apiRequest';

const deleteInstance = async (instanceID) => {
  const { data } = await apiRequest.delete(
    `/api/rhacs/v1/centrals/${instanceID}?async=true`
  );
  return data;
};

export default function useDeleteInstance() {
  const queryClient = useQueryClient();
  return useMutation(deleteInstance, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('instances');
    },
  });
}
