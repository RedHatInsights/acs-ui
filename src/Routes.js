import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Bullseye, Spinner } from '@patternfly/react-core';

const OopsPage = lazy(() =>
  import(/* webpackChunkName: "OopsPage" */ './routes/OopsPage/OopsPage')
);
const NoPermissionsPage = lazy(() =>
  import(
    /* webpackChunkName: "NoPermissionsPage" */ './routes/NoPermissionsPage/NoPermissionsPage'
  )
);
const InstancesPage = lazy(() =>
  import(
    /* webpackChunkName: "InstancesPage" */ './routes/InstancesPage/InstancesPage'
  )
);
const InstanceDetailsPage = lazy(() =>
  import(
    /* webpackChunkName: "InstancesPage" */ './routes/InstanceDetailsPage/InstanceDetailsPage'
  )
);

export function Routes() {
  return (
    <Suspense
      fallback={
        <Bullseye>
          <Spinner />
        </Bullseye>
      }
    >
      <Switch>
        <Route path="/oops" component={OopsPage} />
        <Route path="/no-permissions" component={NoPermissionsPage} />
        <Route
          path="/instances/instance/:instanceName"
          component={InstanceDetailsPage}
        />
        <Route path="/instances" component={InstancesPage} />
        {/* Finally, catch all unmatched routes */}
        <Route>
          <Redirect to="/instances" />
        </Route>
      </Switch>
    </Suspense>
  );
}
