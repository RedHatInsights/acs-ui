import React from "react";
import {
  Flex,
  FlexItem,
  Radio,
  Stack,
  StackItem,
  Text,
  TextContent,
  TextVariants,
  Title,
} from "@patternfly/react-core";
import {
  Select,
  SelectOption,
  SelectOptionObject,
} from "@patternfly/react-core/deprecated";

import HeaderExternalLink from "./HeaderExternalLink";

import { WIZARD_ID } from "./GettingStartedWizard";

const OPENSHIFT = "openshift";
const EKS = "eks";
const AKS = "aks";
const GKE = "gke";
const OPERATOR = "operator";
const HELM = "helm";

const environments = [OPENSHIFT, EKS, AKS, GKE, OPERATOR, HELM] as const;

export type Environment = (typeof environments)[number];

function isEnvironment(e: string): e is Environment {
  return environments.some((env) => e === env);
}

const installations = [OPERATOR, HELM] as const;

export type Installation = (typeof installations)[number];

function isInstallation(i: string): i is Installation {
  return installations.some((ins) => ins === i);
}

export type InstallOptionsProps = {
  selectedEnv: Environment;
  handleSelectedEnvChange: (env: Environment) => void;
  selectedInstallation: typeof OPERATOR | typeof HELM;
  handleInstallationChange: (installation: Installation) => void;
};

function InstallOptions({
  selectedEnv,
  handleSelectedEnvChange,
  selectedInstallation,
  handleInstallationChange,
}: InstallOptionsProps) {
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

  const onInstallationMethodSelect = (
    selection: string | SelectOptionObject
  ) => {
    setIsSelectOpen(false);
    if (typeof selection === "string" && isInstallation(selection)) {
      handleInstallationChange(selection);
    }
  };

  const onToggleSelect = () => {
    setIsSelectOpen((prev) => !prev);
  };

  return (
    <Stack hasGutter>
      <StackItem>
        <Flex justifyContent={{ default: "justifyContentSpaceBetween" }}>
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
              onSelect={(_e, v) => onInstallationMethodSelect(v)}
              aria-label="Select your installation method"
              menuAppendTo={document.getElementById(WIZARD_ID) ?? "inline"}
            >
              {options}
            </Select>
          </>
        )}
      </StackItem>
    </Stack>
  );
}

export default InstallOptions;
