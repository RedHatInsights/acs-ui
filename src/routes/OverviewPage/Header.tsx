import React from 'react';
import {
  Button,
  ButtonVariant,
  Divider,
  Flex,
  FlexItem,
  Icon,
  PageSection,
  PageSectionVariants,
  Text,
  TextContent,
} from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';

function Header() {
  return (
    <PageSection variant={PageSectionVariants.light}>
      <Flex>
        <FlexItem>
          <Icon
            size="sm"
            className="pf-v5-u-ml-md"
            color="currentColor"
            // noVerticalAlign={false}
          >
            <ExternalLinkAltIcon />
          </Icon>
        </FlexItem>

        <Divider
          orientation={{
            default: 'vertical',
          }}
        />
        <FlexItem>
          <TextContent>
            <Text component="h1">Advanced Cluster Security</Text>
            <Text component="p">
              Fully hosted cloud service for protecting cloud native
              applications and Kubernetes.
            </Text>
            <Button
              variant={ButtonVariant.link}
              component="a"
              target="_blank"
              href="https://www.redhat.com/en/technologies/cloud-computing/openshift/advanced-cluster-security-kubernetes#talk-to-a-red-hatter"
              isInline
            >
              Learn more
              <Icon size="md" className="pf-v5-u-ml-md" color="currentColor">
                <ExternalLinkAltIcon />
              </Icon>
            </Button>
          </TextContent>
        </FlexItem>
      </Flex>
    </PageSection>
  );
}

export default Header;
