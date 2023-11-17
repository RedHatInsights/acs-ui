import React from 'react';
import {
  Button,
  Card,
  CardBody,
  Flex,
  FlexItem,
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
        <Flex
          alignContent={{ default: 'alignContentFlexEnd' }}
          direction={{ default: 'row' }}
        >
          <Flex
            direction={{ default: 'column' }}
            flex={{ default: 'flex_1' }}
            alignSelf={{ default: 'alignSelfCenter' }}
          >
            <FlexItem>
              <TextContent>
                <Text component={TextVariants.h2}>
                  Get started with Advanced Cluster Security
                </Text>
              </TextContent>
            </FlexItem>
            <FlexItem>
              <Text component={TextVariants.p}>
                Red Hat Advanced Cluster Security Cloud Service provides a
                Kubernetes-native architecture for container security, enabling
                DevOps and InfoSec teams to operationalize full life cycle
                container and Kubernetes security.
              </Text>
            </FlexItem>
            <Flex direction={{ default: 'row' }} className="pf-u-mt-md">
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
          <FlexItem alignSelf={{ default: 'alignSelfFlexEnd' }}>
            <img src={bannerImage} style={{ width: '180px' }} />
          </FlexItem>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default GetStartedCard;
