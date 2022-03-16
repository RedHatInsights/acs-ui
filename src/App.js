import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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

  return <Routes childProps={props} />;
};

export default App;
