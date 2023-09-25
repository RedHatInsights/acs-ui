import { useChrome } from '@redhat-cloud-services/frontend-components/useChrome';

import axios from 'axios';

const API_PROD_URL = 'https://api.openshift.com';
const API_STAGE_URL = 'https://api.stage.openshift.com';
const API_INTEGRATION_URL = 'https://api.integration.openshift.com';

export default function useApi() {
  const { isProd, isBeta } = useChrome();
  let apiUrl = API_STAGE_URL;
  if (isProd()) {
    apiUrl = API_PROD_URL;
  } else if (isBeta()) {
    apiUrl = API_INTEGRATION_URL;
  }
  const authInterceptor = (client) => {
    client.interceptors.request.use(async (cfg) => {
      await insights.chrome.auth.getUser();
      const token = await insights.chrome.auth.getToken();
      const updatedCfg = { ...cfg, url: `${apiUrl}${cfg.url}` };
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
