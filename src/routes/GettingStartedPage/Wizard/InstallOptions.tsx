import React from 'react';
import {
  Flex,
  FlexItem,
  Radio,
  Stack,
  StackItem,
  Content,
  ContentVariants,
  Title,
} from '@patternfly/react-core';
import { SimpleSelect } from '@patternfly/react-templates';

import HeaderExternalLink from './HeaderExternalLink';

import { WIZARD_ID } from './GettingStartedWizard';

const OPENSHIFT = 'openshift';
const EKS = 'eks';
const AKS = 'aks';
const GKE = 'gke';
const OPERATOR = 'operator';
const HELM = 'helm';

const environments = [OPENSHIFT, EKS, AKS, GKE, OPERATOR, HELM] as const;

export type Environment = (typeof environments)[number];

function isEnvironment(e: string): e is Environment {
  return environments.some((env) => e === env);
}

const installationMethods = [OPERATOR, HELM] as const;

export type InstallationMethod = (typeof installationMethods)[number];

function isInstallation(i: string): i is InstallationMethod {
  return installationMethods.some((ins) => ins === i);
}

export type InstallOptionsProps = {
  selectedEnv: Environment | null;
  handleSelectedEnvChange: (env: Environment) => void;
  selectedInstallation: InstallationMethod | null;
  handleInstallationChange: (installation: InstallationMethod) => void;
};

function InstallOptions({
  selectedEnv,
  handleSelectedEnvChange,
  selectedInstallation,
  handleInstallationChange,
}: InstallOptionsProps) {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newEnvironment = e.currentTarget.value;
    if (!isEnvironment(newEnvironment)) {
      return;
    }

    handleSelectedEnvChange(newEnvironment);
    if (newEnvironment != OPENSHIFT) {
      handleInstallationChange(HELM);
    } else {
      handleInstallationChange(OPERATOR);
    }
  };

  const onInstallationMethodSelect = (selection: string | number) => {
    if (typeof selection === 'string' && isInstallation(selection)) {
      handleInstallationChange(selection);
    }
  };

  return (
    <Stack hasGutter>
      <StackItem>
        <Flex justifyContent={{ default: 'justifyContentSpaceBetween' }}>
          <FlexItem>
            <Title headingLevel="h1">SecuredCluster Installation Options</Title>
          </FlexItem>
          <FlexItem>
            <HeaderExternalLink />
          </FlexItem>
        </Flex>
      </StackItem>
      <StackItem>
        <Content>
          <Content component={ContentVariants.h3}>Select your environment</Content>
        </Content>
        <Radio
          label="OpenShift"
          id={`radio-environment-${OPENSHIFT}`}
          name={OPENSHIFT}
          value={OPENSHIFT}
          aria-label={OPENSHIFT}
          onChange={handleChange}
          isChecked={selectedEnv === OPENSHIFT}
        />
        <Radio
          label="EKS"
          id={`radio-environment-${EKS}`}
          name={EKS}
          value={EKS}
          aria-label={EKS}
          onChange={handleChange}
          isChecked={selectedEnv === EKS}
        />
        <Radio
          label="AKS"
          id={`radio-environment-${AKS}`}
          name={AKS}
          value={AKS}
          aria-label={AKS}
          onChange={handleChange}
          isChecked={selectedEnv === AKS}
        />
        <Radio
          label="GKE"
          id={`radio-environment-${GKE}`}
          name={GKE}
          value={GKE}
          aria-label={GKE}
          onChange={handleChange}
          isChecked={selectedEnv === GKE}
        />
      </StackItem>
      <StackItem>
        {selectedEnv && selectedInstallation && (
          <>
            <Content>
              <Content component={ContentVariants.h3}>
                Select your supported installation method
              </Content>
            </Content>
            <SimpleSelect
              toggleWidth="100%"
              initialOptions={
                selectedEnv === OPENSHIFT
                  ? [
                      {
                        content: 'Operator (recommended)',
                        value: OPERATOR,
                        selected: selectedInstallation === OPERATOR,
                      },
                      {
                        content: 'Helm',
                        value: HELM,
                        selected: selectedInstallation === HELM,
                      },
                    ]
                  : [
                      {
                        content: 'Helm',
                        value: HELM,
                        selected: selectedInstallation === HELM,
                      },
                    ]
              }
              onSelect={(_e, v) => onInstallationMethodSelect(v)}
              aria-label="Select your installation method"
              popperProps={{
                appendTo: document.getElementById(WIZARD_ID) ?? 'inline',
              }}
            />
          </>
        )}
      </StackItem>
    </Stack>
  );
}

export default InstallOptions;
