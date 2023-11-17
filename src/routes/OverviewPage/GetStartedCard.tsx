import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Flex,
  FlexItem,
  Grid,
  GridItem,
  Stack,
  Text,
  TextContent,
  TextVariants,
} from '@patternfly/react-core';

import bannerImage from '../../assets/banner_image.png';
import AppLink from '../../components/AppLink';

function GetStartedCard() {
  return (
    <Card>
      <CardBody>
        <Flex>
          <FlexItem>
            <TextContent>
              <Text component={TextVariants.h2}>
                Get started with Red Hat Advanced Cluster Security
              </Text>
            </TextContent>
          </FlexItem>
          <Flex direction={{ default: 'column' }}>
            <FlexItem>
              <Grid hasGutter>
                <GridItem span={8}>
                  <Stack hasGutter>
                    <TextContent>
                      <Text component={TextVariants.p}>
                        Red Hat Advanced Cluster Security Cloud Service provides
                        a Kubernetes-native architecture for container security,
                        enabling DevOps and InfoSec teams to operationalize full
                        life cycle container and Kubernetes security.
                      </Text>
                    </TextContent>
                  </Stack>
                </GridItem>
                <GridItem span={2}>
                  <img src={bannerImage} />
                </GridItem>
              </Grid>
            </FlexItem>
            <Flex>
              <FlexItem>
                <Button
                  component="a"
                  href="https://www.redhat.com/en/technologies/cloud-computing/openshift/advanced-cluster-security-kubernetes/cloud-service/trial"
                  target="_blank"
                  variant="primary"
                >
                  Start free trial
                </Button>
              </FlexItem>
              <FlexItem>
                <Button
                  component={(props) => (
                    <AppLink {...props} to={'getting-started'} />
                  )}
                  variant="link"
                >
                  Get started with ACS
                </Button>
              </FlexItem>
            </Flex>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default GetStartedCard;
