import React from 'react';
import {
  PageHeader,
  PageHeaderTitle,
} from '@redhat-cloud-services/frontend-components/PageHeader';
import { Button } from '@patternfly/react-core/dist/dynamic/components/Button';
import { Flex } from '@patternfly/react-core/dist/dynamic/layouts/Flex';
import { FlexItem } from '@patternfly/react-core/dist/dynamic/layouts/Flex';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page';
import { Content } from '@patternfly/react-core/dist/dynamic/components/Content';
import { ContentVariants } from '@patternfly/react-core/dist/dynamic/components/Content';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/dynamic/icons/external-link-alt-icon';

import GettingStartedWizard from './Wizard/GettingStartedWizard';

function GettingStartedPage() {
  return (
    <div>
      <PageHeader>
        <Flex direction={{ default: 'column' }}>
          <FlexItem>
            <PageHeaderTitle title="Get started with Red Hat Advanced Cluster Security" />
          </FlexItem>
          <FlexItem>
            <Content>
              <Content component={ContentVariants.p}>
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
              </Content>
            </Content>
          </FlexItem>
        </Flex>
      </PageHeader>
      <PageSection hasBodyWrapper={false}>
        <GettingStartedWizard />
      </PageSection>
    </div>
  );
}

export default GettingStartedPage;
