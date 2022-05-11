import { useQuery } from 'react-query';

import apiRequest from '../../services/apiRequest';
import { getQueryString } from '../../utils/queryString';

export type Instance = {
  id: string;
  name: string;
  owner: string;
  region: string;
  cloud_provider: string;
  status: "ready";
  created_at: string;
  updated_at: string;
};

type GetInstancesQueryData = {
  items: Instance[]
};

const getInstances = async ({ query }) => {
  const queryString = getQueryString(query);
  const { data } = await apiRequest.get(
    `/api/dinosaurs_mgmt/v1/dinosaurs?${queryString}`
  );
  return data;
};

export default function useInstances(options) {
  return useQuery<GetInstancesQueryData>(["instances", options], () =>
    getInstances(options)
  );
}
