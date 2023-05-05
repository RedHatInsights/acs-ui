/* eslint-disable react/prop-types */
import React from 'react';
import {
  Flex,
  FlexItem,
  Radio,
  Select,
  SelectOption,
  Stack,
  StackItem,
  Text,
  TextContent,
  TextVariants,
  Title,
} from '@patternfly/react-core';

import HeaderExternalLink from './HeaderExternalLink';

import { WIZARD_ID } from './GettingStartedWizard';

const OPENSHIFT = 'openshift';
const EKS = 'eks';
const AKS = 'aks';
const GKE = 'gke';
const OPERATOR = 'operator';
const HELM = 'helm';

const InstallOptions = ({
  selectedEnv,
  handleSelectedEnvChange,
  selectedInstallation,
  handleInstallationChange,
}) => {
  const [isSelectOpen, setIsSelectOpen] = React.useState(false);

  const options = [
    ...(selectedEnv === OPENSHIFT
      ? [
          <SelectOption key={0} value={OPERATOR}>
            Operator (recommended)
          </SelectOption>,
        ]
      : []),
    <SelectOption key={1} value={HELM}>
      Helm
    </SelectOption>,
  ];

  const handleChange = (_, e) => {
    handleSelectedEnvChange(e.target.value);
    if (e.target.value != OPENSHIFT) {
      handleInstallationChange(HELM);
    } else {
      handleInstallationChange(OPERATOR);
    }
  };

  const onInstallationMethodSelect = (_, selection) => {
    setIsSelectOpen(false);
    handleInstallationChange(selection);
  };

  const onToggleSelect = () => {
    setIsSelectOpen((prev) => !prev);
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
        <TextContent>
          <Text component={TextVariants.h3}>Select your environment</Text>
        </TextContent>
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
        {selectedEnv && (
          <>
            <TextContent>
              <Text component={TextVariants.h3}>
                Select your supported installation method
              </Text>
            </TextContent>
            <Select
              variant="single"
              isOpen={isSelectOpen}
              onToggle={onToggleSelect}
              selections={selectedInstallation}
              onSelect={onInstallationMethodSelect}
              aria-label="Select your installation method"
              menuAppendTo={document.getElementById(WIZARD_ID)}
            >
              {options}
            </Select>
          </>
        )}
      </StackItem>
    </Stack>
  );
};

export default InstallOptions;
