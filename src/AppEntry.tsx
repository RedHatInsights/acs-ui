import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { init } from './store';
import App from './App';
import { getBaseName } from '@redhat-cloud-services/frontend-components-utilities/helpers';
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
      <Router basename={getBaseName(window.location.pathname)}>
        <App />
      </Router>
    </QueryClientProvider>
  </Provider>
);

export default AppEntry;
