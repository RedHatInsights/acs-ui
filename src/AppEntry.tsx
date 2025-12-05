import React, { useEffect } from 'react';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const AppEntry = () => {
  useEffect(() => {
    const rootElm = document.getElementById('root');
    rootElm?.setAttribute('data-ouia-safe', 'true');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

export default AppEntry;
