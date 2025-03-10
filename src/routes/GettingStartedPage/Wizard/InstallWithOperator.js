import React from 'react';
import {
  Button,
  ClipboardCopy,
  ExpandableSection,
  Flex,
  FlexItem,
  List,
  ListItem,
  Stack,
  StackItem,
  Title,
} from '@patternfly/react-core';

import { ExternalLinkAltIcon } from '@patternfly/react-icons';

import centralEndpointImage from '../../../assets/central_api_endpoint.png';
import clusterInitBundleImage from '../../../assets/cluster_init_bundle.png';
import HeaderExternalLink from './HeaderExternalLink';

const InstallWithOperator = () => {
  const [initBundleImageExpanded, setInitBundleImageExpanded] =
    React.useState(false);
  const [apiEndpointImageExpanded, setApiEndpointImageExpanded] =
    React.useState(false);

  const onToggleInitBundleImage = (isExpanded) => {
    setInitBundleImageExpanded(isExpanded);
  };

  const onToggleApiEndpointImage = (isExpanded) => {
    setApiEndpointImageExpanded(isExpanded);
  };

  return (
    <Stack hasGutter>
      <StackItem>
        <Flex justifyContent={{ default: 'justifyContentSpaceBetween' }}>
          <FlexItem>
            <Title headingLevel="h1">Install with an Operator</Title>
          </FlexItem>
          <FlexItem>
            <HeaderExternalLink />
          </FlexItem>
        </Flex>
      </StackItem>
      <StackItem>
        <List component="ol" type="1">
          <ListItem>
            Use the OpenShift console to{' '}
            <Button
              variant="link"
              icon={<ExternalLinkAltIcon />}
              iconPosition="right"
              isInline
              href="https://docs.openshift.com/acs/3.72/installing/install-ocp-operator.html" // TODO: get updated documentation
              target="_blank"
              component="a"
              aria-label="install the ACS Operator from Operator Hub"
            >
              install the ACS Operator from Operator Hub
            </Button>
            . Create a new OCP project for ACS. A good name choice is{' '}
            <span className="pf-v6-u-font-weight-bold">rhacs-operator</span>.
          </ListItem>
          <ListItem>
            In the ACS UI, from the menu on the left, go to Platform
            Configuration -{'>'} Integrations and scroll down to{' '}
            <span className="pf-v6-u-font-weight-bold">
              Cluster Init Bundle
            </span>
            .
            <ExpandableSection
              toggleText={'Show me where'}
              onToggle={(_event, isExpanded) =>
                onToggleInitBundleImage(isExpanded)
              }
              isExpanded={initBundleImageExpanded}
            >
              <img
                className="getting-started-image"
                src={clusterInitBundleImage}
              />
            </ExpandableSection>
          </ListItem>
          <ListItem>
            Generate a new cluster init bundle and download the resulting YAML
            file. Also download the Kubernetes secrets file.
          </ListItem>
          <ListItem>
            <div>
              With the ACS project selected, create the init bundle secrets in
              OCP by pasting the contents into the OCP console or by using the
              command:
            </div>
            <ClipboardCopy
              hoverTip="Copy"
              clickTip="Copied"
              variant="inline-compact"
              isCode
              className="pf-v6-u-my-sm"
            >
              {`oc -n rhacs-operator create -f bundlename-cluster-init-secrets.yaml`}
            </ClipboardCopy>
          </ListItem>
          <ListItem>
            In the ACS Operator, install the Secured Cluster API into the ACS
            project. Give your cluster a name and specify the Central Endpoint
            with the Central API Endpoint (including port) from the ACS instance
            details.
            <ExpandableSection
              toggleText={'Show me where'}
              onToggle={(_event, isExpanded) =>
                onToggleApiEndpointImage(isExpanded)
              }
              isExpanded={apiEndpointImageExpanded}
            >
              <img
                className="getting-started-image"
                src={centralEndpointImage}
              />
            </ExpandableSection>
          </ListItem>
        </List>
      </StackItem>
    </Stack>
  );
};

export default InstallWithOperator;
