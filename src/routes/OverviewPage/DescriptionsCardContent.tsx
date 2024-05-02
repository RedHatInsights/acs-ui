import React, { ReactElement } from 'react';
import { List, ListItem } from '@patternfly/react-core';
import {
  BugIcon,
  ClipboardCheckIcon,
  CloudSecurityIcon,
  NetworkIcon,
  ProcessAutomationIcon,
  SecurityIcon,
  ServicesIcon,
} from '@patternfly/react-icons';

type FeatureDetail = {
  title: string;
  icon: ReactElement;
  content: ReactElement;
};

export const featureDetailsMap: Record<string, FeatureDetail> = {
  'about-acscs': {
    title: 'About Red Hat Advanced Cluster Security',
    icon: <CloudSecurityIcon />,
    content: (
      <>
        Red Hat Advanced Cluster Security Cloud Service is the pioneering
        Kubernetes-native security platform, equipping organizations to more
        securely build, deploy, and run cloud-native applications anywhere. The
        solution helps improve the security of the application build process,
        protect the application platform and configurations, and detect and
        respond to runtime issues. Red Hat Advanced Cluster Security Cloud
        Service lowers operational costs by reducing the learning curve for
        implementing Kubernetes security, provides built-in controls for
        enforcement to reduce operational risk, and uses a Kubernetes-native
        approach that supports built-in security across the entire software
        development life cycle, facilitating greater developer productivity.
      </>
    ),
  },
  'vuln-mgmt': {
    title: 'Vulnerability management',
    icon: <BugIcon />,
    content: (
      <List>
        <ListItem>
          Detects host-level vulnerabilities and potential security threats in
          Red Hat Enterprise Linux® CoreOS.
        </ListItem>
        <ListItem>
          Scans images for known vulnerabilities based on specific languages,
          packages, and image layers.
        </ListItem>
        <ListItem>
          Provides a dashboard highlighting the riskiest image vulnerabilities
          and deployments.
        </ListItem>
        <ListItem>
          Verifies image signatures against preconfigured keys for image
          attestation and integrity.
        </ListItem>
        <ListItem>
          Correlates vulnerabilities to running deployments, not just images.
        </ListItem>
        <ListItem>
          Enforces policies based on vulnerability details at build time using
          continuous integration/continuous delivery (CI/CD) integrations.
        </ListItem>
      </List>
    ),
  },
  compliance: {
    title: 'Compliance',
    icon: <ClipboardCheckIcon />,
    content: (
      <List>
        <ListItem>
          Assesses compliance across many controls for CIS Benchmarks, payment
          card industry (PCI), Health Insurance Portability and Accountability
          Act (HIPAA), NERC-CIP, and NIST SP 800-190 and 800-53.
        </ListItem>
        <ListItem>
          Delivers at-a-glance dashboards of overall compliance across the
          controls of each standard with evidence exported to meet auditor
          needs.
        </ListItem>
        <ListItem>
          Provides a detailed view of compliance details to pinpoint clusters,
          namespaces, nodes, or deployments namespaces that do not comply with
          specific standards and controls.
        </ListItem>
      </List>
    ),
  },
  network: {
    title: 'Network segmentation',
    icon: <NetworkIcon />,
    content: (
      <List>
        <ListItem>
          Visualizes allowed vs. active traffic between namespaces, deployments,
          and pods, including external exposures.
        </ListItem>
        <ListItem>
          Simulates network policy changes before they are implemented to
          minimize operational risk to the environment.
        </ListItem>
      </List>
    ),
  },
  risk: {
    title: 'Risk profiling',
    icon: <SecurityIcon />,
    content: (
      <List>
        <ListItem>
          Heuristically ranks your running deployments according to their
          overall security risk by combining security-relevant data such as
          vulnerabilities, configuration policy violations, and runtime
          activity.
        </ListItem>
        <ListItem>
          Tracks improvements in the security posture of your Kubernetes
          deployments to validate the impact of your security team actions.
        </ListItem>
      </List>
    ),
  },
  'config-mgmt': {
    title: 'Configuration management',
    icon: <ServicesIcon />,
    content: (
      <List>
        <ListItem>
          Delivers prebuilt DevOps and security policies to identify
          configuration violations related to network exposures, privileged
          containers, processes running as root, and compliance with industry
          standards.
        </ListItem>
        <ListItem>
          Analyzes Kubernetes role-based access control (RBAC) settings to
          determine user or service account privileges and misconfigurations.
        </ListItem>
        <ListItem>
          Tracks secrets and detects which deployments use the secrets to limit
          access.
        </ListItem>
      </List>
    ),
  },
  runtime: {
    title: 'Runtime detection and response',
    icon: <ProcessAutomationIcon />,
    content: (
      <List>
        <ListItem>
          Monitors system-level events within containers to detect anomalous
          activity indicative of a threat with the automated response using
          Kubernetes-native controls.
        </ListItem>
        <ListItem>
          Baselines process activity in containers to automatically whitelist
          processes, eliminating the need to manually whitelist.
        </ListItem>
        <ListItem>
          Uses prebuilt policies to detect crypto mining, privilege escalation,
          and various exploits.
        </ListItem>
      </List>
    ),
  },
};
