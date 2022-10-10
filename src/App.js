import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Main } from '@redhat-cloud-services/frontend-components/Main';
import { Unavailable } from '@redhat-cloud-services/frontend-components/Unavailable';

import { Routes } from './Routes';
import './App.scss';

const App = (props) => {
  const history = useHistory();

  useEffect(() => {
    insights.chrome.init();

    insights.chrome.identifyApp('acs');

    const unregister = insights.chrome.on('APP_NAVIGATION', (event) =>
      history.push(`/${event.navId}`)
    );

    return () => {
      unregister();
    };
  }, []);

  const environment = insights.chrome.getEnvironment();

  // We don't want to show the UI in the (unused) stage environment
  if (environment === 'stage') {
    return (
      <Main>
        <Unavailable />
      </Main>
    );
  } else {
    return <Routes childProps={props} />;
  }
};

export default App;
