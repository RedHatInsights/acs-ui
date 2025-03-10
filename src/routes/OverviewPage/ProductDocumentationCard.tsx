import React from 'react';
import { Button } from '@patternfly/react-core/dist/dynamic/components/Button';
import { ButtonVariant } from '@patternfly/react-core/dist/dynamic/components/Button';
import { Card } from '@patternfly/react-core/dist/dynamic/components/Card';
import { CardBody } from '@patternfly/react-core/dist/dynamic/components/Card';
import { CardHeader } from '@patternfly/react-core/dist/dynamic/components/Card';
import { CardTitle } from '@patternfly/react-core/dist/dynamic/components/Card';
import { Flex } from '@patternfly/react-core/dist/dynamic/layouts/Flex';
import { FlexItem } from '@patternfly/react-core/dist/dynamic/layouts/Flex';
import { Icon } from '@patternfly/react-core/dist/dynamic/components/Icon';
import { Label } from '@patternfly/react-core/dist/dynamic/components/Label';
import { Content } from '@patternfly/react-core/dist/dynamic/components/Content';
import { ContentVariants } from '@patternfly/react-core/dist/dynamic/components/Content';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/dynamic/icons/external-link-alt-icon';

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
            <Button
              icon={<ExternalLinkAltIcon />}
              iconPosition="right"
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
