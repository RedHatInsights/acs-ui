import React from 'react';
import {
  PageHeader,
  PageHeaderTitle,
} from '@redhat-cloud-services/frontend-components/PageHeader';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Flex,
  FlexItem,
  PageSection,
  Text,
  TextContent,
  TextVariants,
} from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';

import BreadcrumbItemLink from '../../components/BreadcrumbItemLink';
import GettingStartedWizard from './Wizard/GettingStartedWizard';

function GettingStartedPage() {
  return (
    <div>
      <PageHeader>
        <Flex direction={{ default: 'column' }}>
          <FlexItem>
            <Breadcrumb>
              <BreadcrumbItemLink to="/overview">ACS</BreadcrumbItemLink>
              <BreadcrumbItem isActive>Get started with ACS</BreadcrumbItem>
            </Breadcrumb>
          </FlexItem>
          <FlexItem>
            <PageHeaderTitle title="Get started with Red Hat Advanced Cluster Security" />
          </FlexItem>
          <FlexItem>
            <TextContent>
              <Text component={TextVariants.p}>
                The solution helps improve the security of the application build
                process, protects the application platform and configurations,
                detects runtime issues, and facilitates response.{' '}
                <Button
                  variant="link"
                  icon={<ExternalLinkAltIcon />}
                  iconPosition="right"
                  isInline
                  href="https://docs.openshift.com/acs/3.74/welcome/index.html"
                  target="_blank"
                  component="a"
                  aria-label="Learn more about ACS"
                >
                  Learn more about ACS
                </Button>{' '}
                or{' '}
                <Button
                  variant="link"
                  icon={<ExternalLinkAltIcon />}
                  iconPosition="right"
                  isInline
                  onClick={() => {
                    window.open('mailto:acscs-feedback@redhat.com');
                  }}
                  aria-label="Email us"
                >
                  Email us
                </Button>
              </Text>
            </TextContent>
          </FlexItem>
        </Flex>
      </PageHeader>
      <PageSection>
        <GettingStartedWizard />
      </PageSection>
    </div>
  );
}

export default GettingStartedPage;
