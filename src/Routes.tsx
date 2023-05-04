import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes as RouterRoutes } from 'react-router-dom';
import { linkBasename, mergeToBasename } from './utils/paths';

import { Bullseye, Spinner } from '@patternfly/react-core';

const OopsPage = lazy(
  () => import(/* webpackChunkName: "OopsPage" */ './routes/OopsPage/OopsPage')
);
const NoPermissionsPage = lazy(
  () =>
    import(
      /* webpackChunkName: "NoPermissionsPage" */ './routes/NoPermissionsPage/NoPermissionsPage'
    )
);
const InstancesPage = lazy(
  () =>
    import(
      /* webpackChunkName: "InstancesPage" */ './routes/InstancesPage/InstancesPage'
    )
);
const InstanceDetailsPage = lazy(
  () =>
    import(
      /* webpackChunkName: "InstanceDetailsPage" */ './routes/InstanceDetailsPage/InstanceDetailsPage'
    )
);
const OverviewPage = lazy(
  () =>
    import(
      /* webpackChunkName: "OverviewPage" */ './routes/OverviewPage/OverviewPage'
    )
);

const GettingStartedPage = lazy(
  () =>
    import(
      /* webpackChunkName: "GettingStartedPage" */ './routes/GettingStartedPage/GettingStartedPage'
    )
);

export const Routes = () => (
  <Suspense
    fallback={
      <Bullseye>
        <Spinner />
      </Bullseye>
    }
  >
    <RouterRoutes>
      <Route path="no-permissions" element={<NoPermissionsPage />} />
      <Route path="oops" element={<OopsPage />} />
      <Route
        path="/instances/instance/:instanceId"
        element={<InstanceDetailsPage />}
      />
      <Route path="/instances" element={<InstancesPage />} />
      <Route path="/overview" element={<OverviewPage />} />
      <Route path="/getting-started" element={<GettingStartedPage />} />
      {/* Finally, catch all unmatched routes */}
      <Route
        path="*"
        element={
          <Navigate to={mergeToBasename('/overview', linkBasename)} replace />
        }
      />
    </RouterRoutes>
  </Suspense>
);
