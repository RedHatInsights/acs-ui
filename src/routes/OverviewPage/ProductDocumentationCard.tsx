import React from 'react';
import {
  Button,
  ButtonVariant,
  Card,
  CardBody,
  CardFooter,
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
                  ACS product documentation
                </Text>
              </TextContent>
            </FlexItem>
            <FlexItem>
              <Label isCompact color="green">
                Documentation
              </Label>
              <Text
                component={TextVariants.small}
                className="pf-v5-u-color-200 pf-u-ml-sm"
              >
                access.redhat.com
              </Text>
            </FlexItem>
          </Flex>
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Flex>
          <FlexItem>
            <Text component={TextVariants.p}>
              Learn about Red Hat Advanced Cluster Security for Kubernetes and
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
              href=" https://aws.amazon.com/marketplace/pp/prodview-epwnwxab4jwdo"
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
      <CardFooter>
        <Button
          variant={ButtonVariant.link}
          component="a"
          target="_blank"
          href=" https://aws.amazon.com/marketplace/pp/prodview-epwnwxab4jwdo"
          isInline
        >
          View all Application and Data Services Learning resources.
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductDocumentationCard;
