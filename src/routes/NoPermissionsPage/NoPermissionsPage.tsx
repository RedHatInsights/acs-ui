import React, { ReactElement, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { Main } from '@redhat-cloud-services/frontend-components/Main';
import { NotAuthorized } from '@redhat-cloud-services/frontend-components/NotAuthorized';

declare var insights: any;

function NoPermissionsPage(): ReactElement {
  useEffect(() => {
    insights?.chrome?.appAction?.('no-permissions');
  }, []);

  return (
    <Main>
      <NotAuthorized serviceName="Sample app" />
    </Main>
  );
}

export default withRouter(NoPermissionsPage);
