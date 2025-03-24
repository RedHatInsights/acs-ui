import React from 'react';
import { Button } from '@patternfly/react-core/dist/dynamic/components/Button';
import { ClipboardCopy } from '@patternfly/react-core/dist/dynamic/components/ClipboardCopy';
import { ClipboardCopyButton } from '@patternfly/react-core/dist/dynamic/components/ClipboardCopy';
import { CodeBlock } from '@patternfly/react-core/dist/dynamic/components/CodeBlock';
import { CodeBlockAction } from '@patternfly/react-core/dist/dynamic/components/CodeBlock';
import { CodeBlockCode } from '@patternfly/react-core/dist/dynamic/components/CodeBlock';
import { ExpandableSection } from '@patternfly/react-core/dist/dynamic/components/ExpandableSection';
import { Flex } from '@patternfly/react-core/dist/dynamic/layouts/Flex';
import { FlexItem } from '@patternfly/react-core/dist/dynamic/layouts/Flex';
import { List } from '@patternfly/react-core/dist/dynamic/components/List';
import { ListItem } from '@patternfly/react-core/dist/dynamic/components/List';
import { Stack } from '@patternfly/react-core/dist/dynamic/layouts/Stack';
import { StackItem } from '@patternfly/react-core/dist/dynamic/layouts/Stack';
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title';

import ExternalLinkAltIcon from '@patternfly/react-icons/dist/dynamic/icons/external-link-alt-icon';

import centralEndpointImage from '../../../assets/central_api_endpoint.png';
import clusterInitBundleImage from '../../../assets/cluster_init_bundle.png';
import HeaderExternalLink from './HeaderExternalLink';

const InstallWithHelm = () => {
  const [copied, setCopied] = React.useState(false);
  const [initBundleImageExpanded, setInitBundleImageExpanded] =
    React.useState(false);
  const [apiEndpointImageExpanded, setApiEndpointImageExpanded] =
    React.useState(false);

  const clipboardCopyFunc = (event, text) => {
    navigator.clipboard.writeText(text.toString());
  };

  const onCodeBlockCopy = (event, text) => {
    clipboardCopyFunc(event, text);
    setCopied(true);
  };

  const onToggleInitBundleImage = (isExpanded) => {
    setInitBundleImageExpanded(isExpanded);
  };

  const onToggleApiEndpointImage = (isExpanded) => {
    setApiEndpointImageExpanded(isExpanded);
  };

  const codeBlock =
    `helm install -n stackrox --create-namespace \\\n` +
    `stackrox-secured-cluster-services rhacs/secured-cluster-services \\\n` +
    `-f <path_to_cluster_init_bundle.yaml> \\\n` +
    `--set clusterName=<name_of_the_secured_cluster> \\\n` +
    `--set centralEndpoint=<endpoint_of_central_service> \\\n` +
    `--set imagePullSecrets.username=<your redhat.com username> \\\n` +
    `--set imagePullSecrets.password=<your redhat.com password>`;

  const actions = (
    <React.Fragment>
      <CodeBlockAction>
        <ClipboardCopyButton
          textId="code-content"
          aria-label="Copy to clipboard"
          onClick={(e) => onCodeBlockCopy(e, codeBlock)}
          exitDelay={copied ? 1500 : 600}
          variant="plain"
          onTooltipHidden={() => setCopied(false)}
        >
          {copied ? 'Copied' : 'Copy'}
        </ClipboardCopyButton>
      </CodeBlockAction>
    </React.Fragment>
  );

  return (
    <Stack hasGutter>
      <StackItem>
        <Flex justifyContent={{ default: 'justifyContentSpaceBetween' }}>
          <FlexItem>
            <Title headingLevel="h1">Install with Helm</Title>
          </FlexItem>
          <FlexItem>
            <HeaderExternalLink />
          </FlexItem>
        </Flex>
      </StackItem>
      <StackItem>
        <div>
          <span className="pf-v6-u-font-weight-bold">Prerequisites</span>
        </div>
        <div>
          You must have access to the Red Hat Container Registry. For
          information about downloading images from registry.redhat.io, see{' '}
          <Button
            variant="link"
            icon={<ExternalLinkAltIcon />}
            iconPosition="right"
            isInline
            href="https://access.redhat.com/RegistryAuthentication"
            target="_blank"
            component="a"
            aria-label="Red Hat Container Registry Authentication"
          >
            Red Hat Container Registry Authentication.
          </Button>
        </div>
      </StackItem>
      <StackItem>
        <div>You must also have:</div>
        <div className="pf-v6-u-ml-xl">
          <div>A command line interface environment (CLI) with:</div>
          <div>
            Access to the target Kubernetes cluster without RHACS installed
            previously
          </div>
          <div>
            Admin access to K8s Cluster you with to install (kubeconfig)
          </div>
          <div>Helm CLI installed in the same environment</div>
        </div>
      </StackItem>
      <StackItem>
        <List component="ol" type="1">
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
            file.
          </ListItem>
          <ListItem>
            Use the Helm installation method to create the Secured Cluster
            services. Supply the created cluster init bundle, a unique cluster
            name, and the centralEndpoint, which is the URI (including port) of
            your ACS instance. This URI is listed as{' '}
            <span className="pf-v6-u-font-weight-bold">
              Central API Endpoint
            </span>{' '}
            under{' '}
            <span className="pf-v6-u-font-weight-bold">Instance Details</span>.
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
          <ListItem>
            <div className="pf-v6-u-mt-sm">
              If this is the first time you’re using helm, you will need to add
              the <span className="pf-v6-u-font-weight-bold">rhacs</span> repo
              using the following commands:
            </div>
            <div className="pf-v6-u-mt-sm">
              <ClipboardCopy
                hoverTip="Copy"
                clickTip="Copied"
                variant="inline-compact"
                isCode
                className="pf-v6-u-my-sm"
              >
                {`helm repo add rhacs https://mirror.openshift.com/pub/rhacs/charts`}
              </ClipboardCopy>
            </div>
            <div className="pf-v6-u-my-sm">
              <ClipboardCopy
                hoverTip="Copy"
                clickTip="Copied"
                variant="inline-compact"
                isCode
                className="pf-v6-u-my-sm"
              >
                {`helm repo update`}
              </ClipboardCopy>
            </div>
            Run the following Helm install command:
            <CodeBlock actions={actions} className="pf-v6-u-mt-sm">
              <CodeBlockCode id="code-content">{codeBlock}</CodeBlockCode>
            </CodeBlock>
            <div>
              For image pull secrets, there are better options for credentials
              for registry.redhat.io, like a{' '}
              <Button
                variant="link"
                icon={<ExternalLinkAltIcon />}
                iconPosition="right"
                isInline
                href="https://access.redhat.com/terms-based-registry/#accounts"
                target="_blank"
                component="a"
                aria-label="registry service account"
              >
                registry service account
              </Button>
            </div>
          </ListItem>
        </List>
      </StackItem>
    </Stack>
  );
};

export default InstallWithHelm;
