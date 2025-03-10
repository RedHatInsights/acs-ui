import React from 'react';
import { Button } from '@patternfly/react-core/dist/dynamic/components/Button';
import { ButtonVariant } from '@patternfly/react-core/dist/dynamic/components/Button';
import { Divider } from '@patternfly/react-core/dist/dynamic/components/Divider';
import { Flex } from '@patternfly/react-core/dist/dynamic/layouts/Flex';
import { FlexItem } from '@patternfly/react-core/dist/dynamic/layouts/Flex';
import { Icon } from '@patternfly/react-core/dist/dynamic/components/Icon';
import { PageSection } from '@patternfly/react-core/dist/dynamic/components/Page';
import { Content } from '@patternfly/react-core/dist/dynamic/components/Content';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/dynamic/icons/external-link-alt-icon';
import service from '../../assets/ACS_service_icon.svg';

function Header() {
  return (
    <PageSection hasBodyWrapper={false}>
      <Flex>
        <FlexItem alignSelf={{ default: 'alignSelfCenter' }}>
          <img src={service} alt="" />
        </FlexItem>
        <Divider
          orientation={{
            default: 'vertical',
          }}
        />
        <FlexItem>
          <Content>
            <Content component="h1">Advanced Cluster Security</Content>
            <Content component="p">
              Fully hosted cloud service for protecting cloud native
              applications and Kubernetes.
            </Content>
            <Button
              icon={
                <Icon size="md" className="pf-v6-u-ml-md" color="currentColor">
                  <ExternalLinkAltIcon />
                </Icon>
              }
              variant={ButtonVariant.link}
              component="a"
              target="_blank"
              href="https://docs.openshift.com/acs"
              isInline
            >
              Learn more
            </Button>
          </Content>
        </FlexItem>
      </Flex>
    </PageSection>
  );
}

export default Header;
