import { Navigate } from 'react-router-dom';
import React, { useContext } from 'react';

import AppContext from './context/AppContext';
import { linkBasename, mergeToBasename } from './utils/paths';

const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const { isEntitled, isEntitlementLoaded } = useContext(AppContext);
  if (!isEntitlementLoaded) {
    return <></>;
  } else if (isEntitled) {
    return children;
  } else {
    return <Navigate to={mergeToBasename('overview', linkBasename)} replace />;
  }
};

export default ProtectedRoute;
