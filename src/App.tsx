import React, { Fragment, useEffect, useState } from 'react';
import { Reducer } from 'redux';

import { Routes } from './Routes';
import './App.scss';
import AppContext, { defaultState } from './context/AppContext';

import { getRegistry } from '@redhat-cloud-services/frontend-components-utilities/Registry';
import NotificationsPortal from '@redhat-cloud-services/frontend-components-notifications/NotificationPortal';
import { notificationsReducer } from '@redhat-cloud-services/frontend-components-notifications/redux';
import { useChrome } from '@redhat-cloud-services/frontend-components/useChrome';
import { Unavailable } from '@redhat-cloud-services/frontend-components/Unavailable';

const App = () => {
  const { updateDocumentTitle, getEnvironment, auth } = useChrome();
  const [isEntitled, setIsEntitled] = useState(defaultState.isEntitled);
  const [isEntitlementLoaded, setIsEntitlementLoaded] = useState(
    defaultState.isEntitlementLoaded
  );

  // by default entitlement will be disabled in development, use this flag to flip it on
  const enableEntitlementLocally = false;

  const environment = getEnvironment();
  const isDevelopment = process.env.NODE_ENV === 'development';
  const isQAProdAuth = environment === 'qaprodauth';

  useEffect(() => {
    const fetchEntitlements = async () => {
      const user = await auth.getUser();
      if (
        user !== undefined &&
        !isQAProdAuth &&
        (!isDevelopment || enableEntitlementLocally)
      ) {
        setIsEntitled(user.entitlements.acs.is_entitled);
        setIsEntitlementLoaded(true);
      }
    };

    fetchEntitlements();

    // because local development is pointed to prod, the useChrome hook sets isProd to true, which consequently
    // points analytics and entitlements to prod as well. These variables are used to override those issues locally
    if (isDevelopment || isQAProdAuth) {
      localStorage.setItem('chrome:analytics:dev', 'true');
      setIsEntitled(true);
      setIsEntitlementLoaded(true);
    }

    const registry = getRegistry();
    registry.register({ notifications: notificationsReducer as Reducer });

    updateDocumentTitle('acs');
  }, []);

  if (environment === 'stage') {
    return <Unavailable />;
  } else {
    return (
      <Fragment>
        <AppContext.Provider value={{ isEntitled, isEntitlementLoaded }}>
          <NotificationsPortal />
          <Routes />
        </AppContext.Provider>
      </Fragment>
    );
  }
};

export default App;
