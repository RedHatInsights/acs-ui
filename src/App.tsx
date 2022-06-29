import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Routes } from './Routes';
import './App.scss';

declare var insights: any;

const App = () => {
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

  return <Routes />;
};

export default App;
