import React from 'react';
import {
  PageHeader,
  PageHeaderTitle,
} from '@redhat-cloud-services/frontend-components/PageHeader';
import { Main } from '@redhat-cloud-services/frontend-components/Main';
import { useParams } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  Flex,
  FlexItem,
} from '@patternfly/react-core';
import BreadcrumbItemLink from '../../components/BreadcrumbItemLink';

function InstanceDetailsPage() {
  const { instanceName } = useParams();

  return (
    <div>
      <PageHeader>
        <Flex direction={{ default: 'column' }}>
          <FlexItem>
            <Breadcrumb>
              <BreadcrumbItemLink to="/instances">
                ACS instances
              </BreadcrumbItemLink>
              <BreadcrumbItem isActive>{instanceName}</BreadcrumbItem>
            </Breadcrumb>
          </FlexItem>
          <FlexItem>
            <PageHeaderTitle title={instanceName} />
          </FlexItem>
        </Flex>
      </PageHeader>
      <Main />
    </div>
  );
}

export default InstanceDetailsPage;
