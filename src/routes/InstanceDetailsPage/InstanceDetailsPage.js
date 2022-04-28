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
  Bullseye,
  Flex,
  FlexItem,
  Spinner,
} from '@patternfly/react-core';

import useInstance from "hooks/apis/useInstance";

import BreadcrumbItemLink from 'components/BreadcrumbItemLink';

function InstanceDetailsPage() {
  const { instanceId } = useParams();
  const { data: instance, isFetching } = useInstance(instanceId);

  if (isFetching) {
    return (
      <Bullseye>
        <Spinner />
      </Bullseye>
    );
  }

  return (
    <div>
      <PageHeader>
        <Flex direction={{ default: 'column' }}>
          <FlexItem>
            <Breadcrumb>
              <BreadcrumbItemLink to="/instances">
                ACS instances
              </BreadcrumbItemLink>
              <BreadcrumbItem isActive>{instance.name}</BreadcrumbItem>
            </Breadcrumb>
          </FlexItem>
          <FlexItem>
            <PageHeaderTitle title={instance.name} />
          </FlexItem>
        </Flex>
      </PageHeader>
      <Main />
    </div>
  );
}

export default InstanceDetailsPage;
