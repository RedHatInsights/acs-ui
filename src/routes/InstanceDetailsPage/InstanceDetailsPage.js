import React from 'react';
import {
  PageHeader,
  PageHeaderTitle,
} from '@redhat-cloud-services/frontend-components/PageHeader';
import { Main } from '@redhat-cloud-services/frontend-components/Main';
import { useParams } from 'react-router-dom';
import { Breadcrumb } from '@patternfly/react-core/dist/dynamic/components/Breadcrumb';
import { BreadcrumbItem } from '@patternfly/react-core/dist/dynamic/components/Breadcrumb';
import { Bullseye } from '@patternfly/react-core/dist/dynamic/layouts/Bullseye';
import { Button } from '@patternfly/react-core/dist/dynamic/components/Button';
import { ButtonVariant } from '@patternfly/react-core/dist/dynamic/components/Button';
import { Card } from '@patternfly/react-core/dist/dynamic/components/Card';
import { CardBody } from '@patternfly/react-core/dist/dynamic/components/Card';
import { CardHeader } from '@patternfly/react-core/dist/dynamic/components/Card';
import { CardTitle } from '@patternfly/react-core/dist/dynamic/components/Card';
import { Flex } from '@patternfly/react-core/dist/dynamic/layouts/Flex';
import { FlexItem } from '@patternfly/react-core/dist/dynamic/layouts/Flex';
import { Grid } from '@patternfly/react-core/dist/dynamic/layouts/Grid';
import { GridItem } from '@patternfly/react-core/dist/dynamic/layouts/Grid';
import { List } from '@patternfly/react-core/dist/dynamic/components/List';
import { ListItem } from '@patternfly/react-core/dist/dynamic/components/List';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page';
import { Spinner } from '@patternfly/react-core/dist/dynamic/components/Spinner';
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title';
import BreadcrumbItemLink from '../../components/BreadcrumbItemLink';
import useInstance from '../../hooks/apis/useInstance';
import InstanceDetailsList from '../../components/InstanceDetailsList';

import NotFoundMessage from '../../components/NotFoundMessage';

function InstanceDetailsPage() {
  const { instanceId } = useParams();
  const { data: instance, isFetching, isError } = useInstance(instanceId);

  if (isFetching) {
    return (
      <Bullseye>
        <Spinner />
      </Bullseye>
    );
  }

  if (isError) {
    return (
      <NotFoundMessage
        errorTitle="Instance Not Found"
        actionText="Go to ACS Instances page"
        errorDescription="The URL may be incorrect, you may not have permission to view that instance, or that instance no longer exists. Try using the ACS Instances page to find what you are looking for."
        url="instances"
      />
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
      <Main className="pf-v6-u-p-0 pf-m-fill pf-m-overflow-scroll">
        <PageSection hasBodyWrapper={false}>
          <Flex alignItems={{ default: 'alignItemsStretch' }}>
            <FlexItem
              flex={{ default: 'flex_1' }}
              alignSelf={{ default: 'alignSelfStretch' }}
            >
              <Card className="pf-v6-u-h-100">
                <CardHeader>
                  <CardTitle>ACS Instance Access</CardTitle>
                </CardHeader>
                <CardBody>
                  <Flex direction={{ default: 'column' }}>
                    <FlexItem>
                      Get started by signing in to your ACS instance.
                    </FlexItem>
                    <FlexItem>
                      <Button
                        variant={ButtonVariant.primary}
                        component="a"
                        href={instance.centralUIURL}
                        isDisabled={!instance.centralUIURL}
                        target="_blank"
                      >
                        Open ACS Console
                      </Button>
                    </FlexItem>
                  </Flex>
                </CardBody>
              </Card>
            </FlexItem>
            <FlexItem flex={{ default: 'flex_1' }}>
              <Card>
                <CardHeader>
                  <CardTitle>Instance Details</CardTitle>
                </CardHeader>
                <CardBody>
                  <InstanceDetailsList instance={instance} />
                </CardBody>
              </Card>
            </FlexItem>
          </Flex>
        </PageSection>
        <PageSection hasBodyWrapper isFilled hasOverflowScroll isWidthLimited>
          <Title headingLevel="h2">
            Use Red Hat ACS to secure your clusters
          </Title>
          <Grid hasGutter>
            <GridItem md={7}>
              <Card className="marketing-video">
                <iframe
                  src="https://www.youtube.com/embed/lFBFW3HmgsA"
                  title="Advanced Cluster Security in 2 Minutes"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Card>
            </GridItem>
            <GridItem md={5} hasGutter>
              <List isPlain>
                <ListItem>
                  <Button
                    variant="link"
                    isInline
                    component="a"
                    href="https://www.redhat.com/sysadmin/kubernetes-RHACS-red-hat-advanced-cluster-security"
                    target="_blank"
                  >
                    Getting Started Guide
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    variant="link"
                    isInline
                    component="a"
                    href="https://docs.openshift.com/acs/3.71/welcome/index.html"
                    target="_blank"
                  >
                    Product Configuration
                  </Button>
                </ListItem>
              </List>
            </GridItem>
          </Grid>
        </PageSection>
      </Main>
    </div>
  );
}

export default InstanceDetailsPage;
