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
  CardFooter,
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
  Text,
  TextContent,
} from '@patternfly/react-core';
import BreadcrumbItemLink from '../../components/BreadcrumbItemLink';
import useInstance from '../../hooks/apis/useInstance';

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
          <Card>
            <CardHeader>
              <CardHeaderMain>
                <CardTitle>ACS Instance Access</CardTitle>
              </CardHeaderMain>
            </CardHeader>
            <CardBody>
              <p>Get started by signing in to your ACS instance.</p>
            </CardBody>
            <CardFooter>
              <Button
                variant={ButtonVariant.primary}
                component="a"
                href="https://k8s.demo.stackrox.com/login"
                target="_blank"
              >
                Sign in to ACS Instance
              </Button>
            </CardFooter>
          </Card>
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
                  src="https://www.youtube.com/embed/HhYYuGTa63E"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Card>
            </GridItem>
            <GridItem md={5} hasGutter>
              <TextContent>
                <Text>In this video, you’ll learn how to:</Text>
              </TextContent>
              <List>
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>You go back, Jack, do it again</ListItem>
                <ListItem>Three is the magic number</ListItem>
              </List>
            </GridItem>
          </Grid>
        </PageSection>
      </Main>
    </div>
  );
}

export default InstanceDetailsPage;
