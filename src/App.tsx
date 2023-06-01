import React, { Fragment, useEffect, useState } from 'react';
import { Reducer } from 'redux';
import { useSearchParams } from 'react-router-dom';

import { Routes } from './Routes';
import './App.scss';
import AppContext, { defaultState } from './context/AppContext';

import { getRegistry } from '@redhat-cloud-services/frontend-components-utilities/Registry';
import NotificationsPortal from '@redhat-cloud-services/frontend-components-notifications/NotificationPortal';
import { notificationsReducer } from '@redhat-cloud-services/frontend-components-notifications/redux';
import { useChrome } from '@redhat-cloud-services/frontend-components/useChrome';
import { Unavailable } from '@redhat-cloud-services/frontend-components/Unavailable';

const LOCAL_STORAGE_ENTITLEMENT_KEY = 'acs_entitlement';

const App = () => {
  const { updateDocumentTitle, getEnvironment, auth } = useChrome();
  const [searchParams] = useSearchParams();
  const [isEntitled, setIsEntitled] = useState(defaultState.isEntitled);
  const [isEntitlementLoaded, setIsEntitlementLoaded] = useState(
    defaultState.isEntitlementLoaded
  );

  // by default entitlement will be disabled in development, use this flag to flip it on
  const enableEntitlementLocally = false;

  const isDevelopment = process.env.NODE_ENV === 'development';

  useEffect(() => {
    const registry = getRegistry();
    registry.register({ notifications: notificationsReducer as Reducer });

    updateDocumentTitle('acs');
  }, []);

  useEffect(() => {
    const setTemporaryLocalStorage = (
      key: string,
      value: string,
      expirationTimeInHours: number
    ) => {
      const expirationTimestamp =
        Date.now() + expirationTimeInHours * 60 * 60 * 1000;
      const temporaryData = {
        value,
        expiresAt: expirationTimestamp,
      };
      localStorage.setItem(key, JSON.stringify(temporaryData));
    };

    const fetchEntitlements = async () => {
      const user = await auth.getUser();
      if (user !== undefined && (!isDevelopment || enableEntitlementLocally)) {
        setIsEntitled(user.entitlements.acs.is_entitled);
        setIsEntitlementLoaded(true);
      }
    };

    const handleEntitlement = () => {
      const temporaryEntitlementString = localStorage.getItem(
        LOCAL_STORAGE_ENTITLEMENT_KEY
      );
      if (temporaryEntitlementString) {
        const temporaryEntitlementData = JSON.parse(temporaryEntitlementString);
        if (temporaryEntitlementData.expiresAt <= Date.now()) {
          localStorage.removeItem(LOCAL_STORAGE_ENTITLEMENT_KEY);
          fetchEntitlements();
        } else if (temporaryEntitlementData.value === 'true') {
          setIsEntitled(true);
          setIsEntitlementLoaded(true);
        }
      } else {
        fetchEntitlements();
      }
    };

    // because local development is pointed to prod, the useChrome hook sets isProd to true, which consequently
    // points analytics and entitlements to prod as well. These variables are used to override those issues locally
    const handleDevelopmentEnvironment = () => {
      if (isDevelopment) {
        localStorage.setItem('chrome:analytics:dev', 'true');
        setIsEntitled(true);
        setIsEntitlementLoaded(true);
      }
    };

    const isFromAws = searchParams.get('from-aws');
    if (isFromAws) {
      setTemporaryLocalStorage(LOCAL_STORAGE_ENTITLEMENT_KEY, 'true', 24);
    }

    handleEntitlement();
    handleDevelopmentEnvironment();
  }, [searchParams]);

  const environment = getEnvironment();

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
