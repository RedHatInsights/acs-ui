import { useMutation, useQueryClient } from 'react-query';

import apiRequest from '../../services/apiRequest';

const postInstance = async (postData) => {
  const { data } = await apiRequest.post(
    "/api/dinosaurs_mgmt/v1/dinosaurs?async=true",
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
