import React, { useContext } from 'react';
import {
  Button,
  ButtonVariant,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
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
  Icon,
  PageSection,
  PageSectionVariants,
  Stack,
  Text,
  TextContent,
  TextVariants,
} from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import AppLink from '../../components/AppLink';

import Header from './Header';
import bannerImage from '../../assets/banner_image.png';
import AppContext from '../../context/AppContext';
import GetStartedCard from './GetStartedCard';

function OverviewPage() {
  const { isEntitled } = useContext(AppContext);
  return (
    <div>
      <Header />
      <PageSection>
        {/* <Grid hasGutter lg={6}>
          <GridItem>
            <Card className="pf-v5-u-h-100">
              <CardHeader>
                <CardTitle>
                  <Flex>
                    <FlexItem spacer={{ default: 'spacerSm' }}>
                      <TextContent>
                        <Text component="h2">Purchase now</Text>
                      </TextContent>
                    </FlexItem>
                    <FlexItem>
                      <TextContent>
                        <Text className="pf-v5-u-color-200">
                          (US/Canada or EMEA only)
                        </Text>
                      </TextContent>
                    </FlexItem>
                  </Flex>
                </CardTitle>
              </CardHeader>
              <CardBody>
                Purchase a pay-as-you-go subscription for Managed vCPU units
                using one of our Marketplace options below.
              </CardBody>
              <CardFooter>
                <Flex>
                  <FlexItem className="pf-v5-u-mt-md pf-v5-u-mb-md">
                    <Button
                      variant={ButtonVariant.link}
                      component="a"
                      target="_blank"
                      href=" https://aws.amazon.com/marketplace/pp/prodview-epwnwxab4jwdo"
                      isInline
                    >
                      AWS Marketplace (North America)
                      <Icon
                        size="sm"
                        className="pf-v5-u-ml-md"
                        color="currentColor"
                        noVerticalAlign={false}
                      >
                        <ExternalLinkAltIcon />
                      </Icon>
                    </Button>
                  </FlexItem>
                  <FlexItem>
                    <Button
                      variant={ButtonVariant.link}
                      component="a"
                      target="_blank"
                      href="https://aws.amazon.com/marketplace/pp/prodview-oefmjyqe64ces"
                      isInline
                    >
                      AWS Marketplace (EMEA)
                      <Icon
                        className="pf-v5-u-ml-md"
                        size="sm"
                        color="currentColor"
                        noVerticalAlign={false}
                      >
                        <ExternalLinkAltIcon />
                      </Icon>
                    </Button>
                  </FlexItem>
                </Flex>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem>
            <Card className="pf-v5-u-h-100">
              <CardHeader>
                <CardTitle>
                  <Flex>
                    <FlexItem spacer={{ default: 'spacerSm' }}>
                      <TextContent>
                        <Text component="h2">Contact sales</Text>
                      </TextContent>
                    </FlexItem>
                    <FlexItem>
                      <TextContent>
                        <Text className="pf-v5-u-color-200">
                          (Available for all regions)
                        </Text>
                      </TextContent>
                    </FlexItem>
                  </Flex>
                </CardTitle>
              </CardHeader>
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
                      <Icon
                        size="sm"
                        className="pf-v5-u-ml-md"
                        color="currentColor"
                        noVerticalAlign={false}
                      >
                        <ExternalLinkAltIcon />
                      </Icon>
                    </Button>
                  </FlexItem>
                </Flex>
              </CardFooter>
            </Card>
          </GridItem>
        </Grid> */}

        <GetStartedCard />
      </PageSection>
      <PageSection>
        <Card className="pf-v5-u-h-100">
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
                      <DescriptionListTerm>Managed vCPU</DescriptionListTerm>
                      <DescriptionListDescription>
                        $0.03 / hour
                      </DescriptionListDescription>
                    </DescriptionListGroup>
                  </DescriptionList>
                </FlexItem>
              </Flex>
              <Divider orientation={{ default: 'vertical' }} />
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
          <CardBody className="pf-v5-u-w-100 pf-v5-u-w-75-on-lg pf-v5-u-w-50-on-xl">
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
