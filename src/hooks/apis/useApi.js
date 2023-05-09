import { useChrome } from '@redhat-cloud-services/frontend-components/useChrome';

import axios from 'axios';

const API_PROD_URL = 'https://api.openshift.com';
const API_STAGE_URL = 'https://api.stage.openshift.com';

export default function useApi() {
  const { isProd } = useChrome();
  const apiUrl = isProd ? API_PROD_URL : API_STAGE_URL;
  const authInterceptor = (client) => {
    client.interceptors.request.use(async (cfg) => {
      await insights.chrome.auth.getUser();
      const token = await insights.chrome.auth.getToken();
      const BASE_URL = cfg.baseURL || apiUrl;
      const updatedCfg = { ...cfg, url: `${BASE_URL}${cfg.url}` };
      if (token) {
        updatedCfg.headers = {
          ...updatedCfg.headers,
          Authorization: `Bearer ${token}`,
        };
      }
      delete updatedCfg.customHost;
      return updatedCfg;
    });
    return client;
  };
  return authInterceptor(axios.create());
}
