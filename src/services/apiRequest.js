import axios from 'axios';

const API_URL = process?.env?.PROD
  ? 'https://api.openshift.com'
  : 'https://api.stage.openshift.com';

export const authInterceptor = (client) => {
  client.interceptors.request.use(async (cfg) => {
    await insights.chrome.auth.getUser();
    const token = await insights.chrome.auth.getToken();
    const BASE_URL = cfg.baseURL || API_URL;
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

const apiRequest = authInterceptor(axios.create());

export default apiRequest;
