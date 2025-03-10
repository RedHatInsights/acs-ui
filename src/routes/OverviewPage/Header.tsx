import React from 'react';
import {
  Button,
  ButtonVariant,
  Divider,
  Flex,
  FlexItem,
  Icon,
  PageSection,
  Content,
  } from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import service from '../../assets/ACS_service_icon.svg';

function Header() {
  return (
    <PageSection hasBodyWrapper={false} >
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
            <Button icon={<Icon size="md" className="pf-v6-u-ml-md" color="currentColor">
                <ExternalLinkAltIcon />
              </Icon>}
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
