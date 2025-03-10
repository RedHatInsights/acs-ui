import React from 'react';
import {
  Button,
  ButtonVariant,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Flex,
  FlexItem,
  Icon,
  Label,
  Content,
  ContentVariants,
} from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';

function ProductDocumentationCard() {
  return (
    <Card className="pf-v6-u-h-100">
      <CardHeader>
        <CardTitle>
          <Flex direction={{ default: 'column' }}>
            <FlexItem spacer={{ default: 'spacerSm' }}>
              <Content>
                <Content component={ContentVariants.h2}>
                  Red Hat Advanced Cluster Security Cloud Service product
                  documentation
                </Content>
              </Content>
            </FlexItem>
            <FlexItem>
              <Label isCompact color="green">
                Documentation
              </Label>
            </FlexItem>
          </Flex>
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Flex>
          <FlexItem>
            <Content component={ContentVariants.p}>
              Learn about Red Hat Advanced Cluster Security Cloud Service and
              start exploring its features. This documentation will guide from
              installation to configuration, operation, and integrating with
              other products.
            </Content>
          </FlexItem>
          <FlexItem className="pf-v6-u-mt-md pf-v6-u-mb-md">
            <Button icon={<Icon size="md" className="pf-v6-u-ml-md" color="currentColor">
                <ExternalLinkAltIcon />
              </Icon>}
              variant={ButtonVariant.link}
              component="a"
              target="_blank"
              href=" https://docs.openshift.com/acs"
              isInline
            >
              View documentation
              
            </Button>
          </FlexItem>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default ProductDocumentationCard;
