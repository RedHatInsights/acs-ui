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
  Button,
  ButtonVariant,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardHeaderMain,
  Flex,
  FlexItem,
  Grid,
  GridItem,
  List,
  ListItem,
  PageSection,
  PageSectionVariants,
  Spinner,
  Title,
} from '@patternfly/react-core';
import BreadcrumbItemLink from '../../components/BreadcrumbItemLink';
import useInstance from '../../hooks/apis/useInstance';
import InstanceDetailsList from '../../components/InstanceDetailsList';

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
      <Main className="pf-u-p-0 pf-m-fill pf-m-overflow-scroll">
        <PageSection>
          <Flex alignItems={{ default: 'alignItemsStretch' }}>
            <FlexItem
              flex={{ default: 'flex_1' }}
              alignSelf={{ default: 'alignSelfStretch' }}
            >
              <Card className="pf-u-h-100">
                <CardHeader>
                  <CardHeaderMain>
                    <CardTitle>ACS Instance Access</CardTitle>
                  </CardHeaderMain>
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
                  <CardHeaderMain>
                    <CardTitle>Instance Details</CardTitle>
                  </CardHeaderMain>
                </CardHeader>
                <CardBody>
                  <InstanceDetailsList instance={instance} />
                </CardBody>
              </Card>
            </FlexItem>
          </Flex>
        </PageSection>
        <PageSection
          variant={PageSectionVariants.light}
          isFilled
          hasOverflowScroll
          isWidthLimited
        >
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
