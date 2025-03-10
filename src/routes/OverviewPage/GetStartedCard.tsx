import React from 'react';
import { Button } from '@patternfly/react-core/dist/dynamic/components/Button';
import { Card } from '@patternfly/react-core/dist/dynamic/components/Card';
import { CardBody } from '@patternfly/react-core/dist/dynamic/components/Card';
import { CardFooter } from '@patternfly/react-core/dist/dynamic/components/Card';
import { CardTitle } from '@patternfly/react-core/dist/dynamic/components/Card';
import { Flex } from '@patternfly/react-core/dist/dynamic/layouts/Flex';
import { FlexItem } from '@patternfly/react-core/dist/dynamic/layouts/Flex';
import { ProgressStep } from '@patternfly/react-core/dist/dynamic/components/ProgressStepper';
import { ProgressStepper } from '@patternfly/react-core/dist/dynamic/components/ProgressStepper';
import { Content } from '@patternfly/react-core/dist/dynamic/components/Content';
import { ContentVariants } from '@patternfly/react-core/dist/dynamic/components/Content';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';

import bannerImage from '../../assets/banner_image.png';
import AppLink from '../../components/AppLink';
import './GetStartedCard.css';

function GetStartedCard() {
  return (
    <Card>
      <CardBody>
        <Flex direction={{ default: 'column' }}>
          <Flex className="pf-u-mb-xl">
            <Flex
              direction={{ default: 'column' }}
              flex={{ default: 'flex_1' }}
              alignSelf={{ default: 'alignSelfCenter' }}
            >
              <FlexItem>
                <Content>
                  <Content component={ContentVariants.h2}>
                    Get started with Red Hat Advanced Cluster Security Cloud
                    Service
                  </Content>
                </Content>
              </FlexItem>
              <FlexItem>
                <Content component={ContentVariants.p}>
                  Red Hat Advanced Cluster Security Cloud Service provides a
                  Kubernetes-native architecture for container security,
                  enabling DevOps and InfoSec teams to operationalize full life
                  cycle container and Kubernetes security.
                </Content>
              </FlexItem>
            </Flex>
            <Flex direction={{ default: 'row' }} className="pf-u-mt-md"></Flex>
            <FlexItem alignSelf={{ default: 'alignSelfFlexEnd' }}>
              <img src={bannerImage} style={{ width: '180px' }} />
            </FlexItem>
          </Flex>
          <ProgressStepper
            isCenterAligned
            aria-label="Red Hat Advanced Cluster Security Getting Started Stepper"
            className="pf-u-mb-md"
            id="ACS-progress-stepper"
          >
            <ProgressStep
              variant="default"
              id="ACS-getting-started-step1"
              titleId="ACS-getting-started-step1-title"
              aria-label="ACS getting started step 1"
              icon={1}
            >
              <Card isCompact className="pf-u-h-100 pf-u-m-md">
                <CardTitle>Get an ACS subscription</CardTitle>
                <CardBody className="pf-u-pb-0">
                  Start a 60-day free trial subscription to Red Hat® Advanced
                  Cluster Security Cloud Service.
                </CardBody>
                <CardFooter>
                  <Button
                    component="a"
                    href="https://www.redhat.com/en/technologies/cloud-computing/openshift/advanced-cluster-security-kubernetes/cloud-service/trial"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    variant="link"
                    icon={<ExternalLinkAltIcon className="pf-u-ml-xs" />}
                    iconPosition="end"
                  >
                    Activate your 60-day trial now
                  </Button>
                </CardFooter>
              </Card>
            </ProgressStep>
            <ProgressStep
              variant="default"
              id="ACS-getting-started-step2"
              titleId="ACS-getting-started-step2-title"
              aria-label="ACS getting started step 2"
              icon={2}
            >
              <Card isCompact className="pf-u-h-100 pf-u-m-md">
                <CardTitle>Create an ACS instance</CardTitle>
                <CardBody className="pf-u-pb-0">
                  If you&apos;re already subscribed to ACS, continue the process
                  by setting up an ACS instance to get started with securing
                  your clusters.
                </CardBody>
                <CardFooter>
                  <Button
                    component={(props) => (
                      <AppLink {...props} to={'instances'} />
                    )}
                    variant="link"
                  >
                    Create ACS instance
                  </Button>
                </CardFooter>
              </Card>
            </ProgressStep>
            <ProgressStep
              variant="default"
              id="ACS-getting-started-step3"
              titleId="ACS-getting-started-step3-title"
              aria-label="ACS getting started step 3"
              icon={3}
            >
              <Card isCompact className="pf-u-h-100 pf-u-m-md">
                <CardTitle>Secure a cluster</CardTitle>
                <CardBody className="pf-u-pb-0">
                  Once you&apos;ve got your ACS instance up and running, open
                  the designated ACS console from your ACS instance and follow
                  the instructions to secure a cluster.
                </CardBody>
                <CardFooter>
                  <Button
                    component={(props) => (
                      <AppLink {...props} to={'getting-started'} />
                    )}
                    variant="link"
                  >
                    Secure a cluster
                  </Button>
                </CardFooter>
              </Card>
            </ProgressStep>
          </ProgressStepper>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default GetStartedCard;
