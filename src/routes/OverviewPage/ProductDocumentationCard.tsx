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
  Text,
  TextContent,
  TextVariants,
} from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';

function ProductDocumentationCard() {
  return (
    <Card className="pf-v5-u-h-100">
      <CardHeader>
        <CardTitle>
          <Flex direction={{ default: 'column' }}>
            <FlexItem spacer={{ default: 'spacerSm' }}>
              <TextContent>
                <Text component={TextVariants.h2}>
                  Red Hat Advanced Cluster Security Cloud Service product
                  documentation
                </Text>
              </TextContent>
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
            <Text component={TextVariants.p}>
              Learn about Red Hat Advanced Cluster Security Cloud Service and
              start exploring its features. This documentation will guide from
              installation to configuration, operation, and integrating with
              other products.
            </Text>
          </FlexItem>
          <FlexItem className="pf-v5-u-mt-md pf-v5-u-mb-md">
            <Button
              variant={ButtonVariant.link}
              component="a"
              target="_blank"
              href=" https://docs.openshift.com/acs"
              isInline
            >
              View documentation
              <Icon size="md" className="pf-v5-u-ml-md" color="currentColor">
                <ExternalLinkAltIcon />
              </Icon>
            </Button>
          </FlexItem>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default ProductDocumentationCard;
