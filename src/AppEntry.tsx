import React from 'react';
import { Provider } from 'react-redux';
import { init } from './store';
import App from './App';
import logger from 'redux-logger';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const AppEntry = () => (
  <Provider
    store={init(
      ...(process.env.NODE_ENV !== 'production' ? [logger] : [])
    ).getStore()}
  >
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
);

export default AppEntry;
