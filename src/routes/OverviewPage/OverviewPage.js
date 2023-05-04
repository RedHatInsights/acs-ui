import React from 'react';
import {
  Button,
  ButtonVariant,
  Card,
  CardBody,
  CardFooter,
  CardHeaderMain,
  CardTitle,
  DescriptionList,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTerm,
  Divider,
  Flex,
  FlexItem,
  Grid,
  GridItem,
  PageSection,
  PageSectionVariants,
  Stack,
  Text,
  TextContent,
  TextVariants,
} from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import AppLink from '../../components/AppLink';

import bannerImage from '../../assets/banner_image.png';

function OverviewPage() {
  return (
    <div>
      <PageSection variant={PageSectionVariants.light} className="pf-u-p-2xl">
        <Flex direction={{ default: 'column' }}>
          <FlexItem>
            <Grid hasGutter>
              <GridItem span={8}>
                <Stack hasGutter>
                  <TextContent>
                    <Text component={TextVariants.h1}>
                      Get started with Red Hat Advanced Cluster Security Cloud
                      Service
                    </Text>
                  </TextContent>
                  <TextContent
                    component={TextVariants.p}
                    className="pf-u-color-200 pf-u-font-size-lg"
                  >
                    <Text>
                      Fully hosted cloud service for protecting cloud native
                      applications and Kubernetes
                    </Text>
                  </TextContent>
                  <TextContent>
                    <Text component={TextVariants.p}>
                      Red Hat® Advanced Cluster Security for Kubernetes is the
                      pioneering Kubernetes-native security platform, that
                      equips organizations to more securely build, deploy, and
                      run cloud-native applications anywhere. The solution RHACS
                      Cloud Service helps improve the security of the
                      application build process, protects the application
                      platform and configurations, detects runtime issues, and
                      facilitates response. RHACS Cloud Service lowers
                      operational costs by reducing the learning curve for
                      implementing Kubernetes security, provides built-in
                      controls for enforcement to reduce operational risk, and
                      uses a Kubernetes-native approach that supports built-in
                      security across the entire software development life
                      cycle, facilitating greater developer productivity.
                    </Text>
                  </TextContent>
                </Stack>
              </GridItem>
              <GridItem span={4}>
                <img src={bannerImage} />
              </GridItem>
            </Grid>
          </FlexItem>
          <FlexItem>
            <Button
              component={(props) => (
                <AppLink {...props} to={'getting-started'} />
              )}
            >
              Get Started
            </Button>
          </FlexItem>
        </Flex>
      </PageSection>
      <PageSection>
        <Grid hasGutter lg={6}>
          <GridItem>
            <Card className="pf-u-h-100">
              <CardHeaderMain>
                <CardTitle>
                  <Flex>
                    <FlexItem spacer={{ default: 'spacerSm' }}>
                      <TextContent>
                        <Text component="h2">Purchase now</Text>
                      </TextContent>
                    </FlexItem>
                    <FlexItem>
                      <TextContent>
                        <Text className="pf-u-color-200">
                          (US and Canada only)
                        </Text>
                      </TextContent>
                    </FlexItem>
                  </Flex>
                </CardTitle>
              </CardHeaderMain>
              <CardBody>
                Purchase a pay-as-you-go subscription for Managed vCPU units
                using one of our Marketplace options below
              </CardBody>
              <CardFooter>
                <Flex>
                  <FlexItem>
                    <Button
                      variant={ButtonVariant.link}
                      component="a"
                      target="_blank"
                      href="https://aws.amazon.com/marketplace/pp/prodview-2i77ihj7rlgy6"
                      isInline
                    >
                      AWS Marketplace
                      <ExternalLinkAltIcon
                        className="pf-u-ml-md"
                        color="currentColor"
                        noVerticalAlign={false}
                        size="sm"
                      />
                    </Button>
                  </FlexItem>
                </Flex>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem>
            <Card className="pf-u-h-100">
              <CardHeaderMain>
                <CardTitle>
                  <Flex>
                    <FlexItem spacer={{ default: 'spacerSm' }}>
                      <TextContent>
                        <Text component="h2">Contact sales</Text>
                      </TextContent>
                    </FlexItem>
                    <FlexItem>
                      <TextContent>
                        <Text className="pf-u-color-200">
                          (Available for all regions)
                        </Text>
                      </TextContent>
                    </FlexItem>
                  </Flex>
                </CardTitle>
              </CardHeaderMain>
              <CardBody>
                Contact sales to get a prepaid subscription that fits your
                needs. Sales can help set up a prepaid subscription, modify a
                current subscription or get a longer trial
              </CardBody>
              <CardFooter>
                <Flex>
                  <FlexItem>
                    <Button
                      variant={ButtonVariant.link}
                      component="a"
                      target="_blank"
                      href="https://www.redhat.com/en/technologies/cloud-computing/openshift/advanced-cluster-security-kubernetes#talk-to-a-red-hatter"
                      isInline
                    >
                      Contact sales
                      <ExternalLinkAltIcon
                        className="pf-u-ml-md"
                        color="currentColor"
                        noVerticalAlign={false}
                        size="sm"
                      />
                    </Button>
                  </FlexItem>
                </Flex>
              </CardFooter>
            </Card>
          </GridItem>
        </Grid>
      </PageSection>
      <PageSection>
        <Card className="pf-u-h-100">
          <CardTitle>
            <TextContent>
              <Text component="h2">Pricing model</Text>
            </TextContent>
          </CardTitle>
          <CardBody>
            <Flex spaceItems={{ default: 'spaceItemsXl' }}>
              <Flex
                alignSelf={{ default: 'alignSelfCenter' }}
                flex={{ default: 'flex_1' }}
                justifyContent={{ default: 'justifyContentCenter' }}
              >
                <FlexItem>
                  <DescriptionList isHorizontal>
                    <DescriptionListGroup>
                      <DescriptionListTerm>First 20 vCPU</DescriptionListTerm>
                      <DescriptionListDescription>
                        Free
                      </DescriptionListDescription>
                    </DescriptionListGroup>
                    <DescriptionListGroup>
                      <DescriptionListTerm>Managed vCPU</DescriptionListTerm>
                      <DescriptionListDescription>
                        $0.03 / hour
                      </DescriptionListDescription>
                    </DescriptionListGroup>
                  </DescriptionList>
                </FlexItem>
              </Flex>
              <Divider isVertical />
              <FlexItem flex={{ default: 'flex_1' }}>
                <TextContent>
                  <Text component="p">
                    A <strong>managed vCPU</strong> means the number of vCPU
                    measured on a managed cluster
                  </Text>
                </TextContent>
              </FlexItem>
            </Flex>
          </CardBody>
        </Card>
      </PageSection>
      <PageSection>
        <Card>
          <CardTitle>
            <TextContent>
              <Text component="h2">Brief demo</Text>
            </TextContent>
          </CardTitle>
          <CardBody className="pf-u-w-100 pf-u-w-75-on-lg pf-u-w-50-on-xl">
            <div className="marketing-video">
              <iframe
                src="https://www.youtube.com/embed/uPjvVGjoiZw"
                title="Short Demo of Advanced Cluster Security"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </CardBody>
        </Card>
      </PageSection>
    </div>
  );
}

export default OverviewPage;
