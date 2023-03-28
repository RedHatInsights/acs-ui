import React, { Fragment, useEffect } from 'react';
import { Reducer } from 'redux';

import { Routes } from './Routes';
import './App.scss';

import { getRegistry } from '@redhat-cloud-services/frontend-components-utilities/Registry';
import NotificationsPortal from '@redhat-cloud-services/frontend-components-notifications/NotificationPortal';
import { notificationsReducer } from '@redhat-cloud-services/frontend-components-notifications/redux';
import { useChrome } from '@redhat-cloud-services/frontend-components/useChrome';
import { Unavailable } from '@redhat-cloud-services/frontend-components/Unavailable';

const App = () => {
  const { updateDocumentTitle, getEnvironment } = useChrome();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      localStorage.setItem('chrome:analytics:dev', 'true');
    }

    const registry = getRegistry();
    registry.register({ notifications: notificationsReducer as Reducer });

    updateDocumentTitle('acs');
  }, []);

  const environment = getEnvironment();

  if (environment === 'stage') {
    return (
      <Unavailable />
    )
  } else {
    return (
      <Fragment>
        <NotificationsPortal />
        <Routes />
      </Fragment>
    );
  }
};

export default App;
