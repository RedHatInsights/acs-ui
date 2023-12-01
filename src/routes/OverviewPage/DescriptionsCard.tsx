import React from 'react';
import { Card, Icon } from '@patternfly/react-core';
import {
  BugIcon,
  ClipboardCheckIcon,
  CloudSecurityIcon,
  NetworkIcon,
  ProcessAutomationIcon,
  SecurityIcon,
  ServicesIcon,
} from '@patternfly/react-icons';

import ExpandableDescription from './ExpandableDescription';

function DescriptionsCard() {
  return (
    <Card>
      <ExpandableDescription
        title="About Advanced Cluster Security"
        icon={
          <Icon size="lg" color="blue">
            <CloudSecurityIcon />
          </Icon>
        }
      >
        Red Hat® Advanced Cluster Security for Kubernetes is the pioneering
        Kubernetes-native security platform, equipping organizations to more
        securely build, deploy, and run cloud-native applications anywhere. The
        solution helps improve the security of the application build process,
        protect the application platform and configurations, and detect and
        respond to runtime issues. Red Hat Advanced Cluster Security for
        Kubernetes lowers operational costs by reducing the learning curve for
        implementing Kubernetes security, provides built-in controls for
        enforcement to reduce operational risk, and uses a Kubernetes-native
        approach that supports built-in security across the entire software
        development life cycle, facilitating greater developer productivity.
      </ExpandableDescription>
      <ExpandableDescription
        title="Vulnerability management"
        icon={
          <Icon size="lg" color="blue">
            <BugIcon />
          </Icon>
        }
      >
        Scans images for known vulnerabilities based on specific languages,
        packages, and image layers. Provides a dashboard highlighting the
        riskiest image vulnerabilities and deployments. Verifies image
        signatures against preconfigured keys for image attestation and
        integrity. Correlates vulnerabilities to running deployments, not just
        images Enforces policies based on vulnerability details at build time
        using continuous integration/continuous delivery (CI/CD) integrations.
      </ExpandableDescription>
      <ExpandableDescription
        title="Compliance"
        icon={
          <Icon size="lg" color="blue">
            <ClipboardCheckIcon />
          </Icon>
        }
      >
        Assesses compliance across many controls for CIS Benchmarks, payment
        card industry (PCI), Health Insurance Portability and Accountability Act
        (HIPAA), NERC-CIP, and NIST SP 800-190 and 800-53.
        <br />
        <br />
        Delivers at-a-glance dashboards of overall compliance across the
        controls of each standard with evidence exported to meet auditor needs.
        <br />
        <br />
        Provides a detailed view of compliance details to pinpoint clusters,
        namespaces, nodes, or deployments namespaces that do not comply with
        specific standards and controls.
      </ExpandableDescription>
      <ExpandableDescription
        title="Network segmentation"
        icon={
          <Icon size="lg" color="blue">
            <NetworkIcon />
          </Icon>
        }
      >
        Visualizes allowed vs. active traffic between namespaces, deployments,
        and pods, including external exposures.
        <br />
        <br />
        Simulates network policy changes before they are implemented to minimize
        operational risk to the environment.
      </ExpandableDescription>
      <ExpandableDescription
        title="Risk profiling"
        icon={
          <Icon size="lg" color="blue">
            <SecurityIcon />
          </Icon>
        }
      >
        Heuristically ranks your running deployments according to their overall
        security risk by combining security-relevant data such as
        vulnerabilities, configuration policy violations, and runtime activity.
        <br />
        <br />
        Tracks improvements in the security posture of your Kubernetes
        deployments to validate the impact of your security team actions.
      </ExpandableDescription>
      <ExpandableDescription
        title="Configuration management"
        icon={
          <Icon size="lg" color="blue">
            <ServicesIcon />
          </Icon>
        }
      >
        Delivers prebuilt DevOps and security policies to identify configuration
        violations related to network exposures, privileged containers,
        processes running as root, and compliance with industry standards.
        <br />
        <br />
        Analyzes Kubernetes role-based access control (RBAC) settings to
        determine user or service account privileges and misconfigurations.
        <br />
        <br />
        Tracks secrets and detects which deployments use the secrets to limit
        access.
      </ExpandableDescription>
      <ExpandableDescription
        title="Runtime detection and response"
        icon={
          <Icon size="lg" color="blue">
            <ProcessAutomationIcon />
          </Icon>
        }
      >
        Monitors system-level events within containers to detect anomalous
        activity indicative of a threat with the automated response using
        Kubernetes-native controls. <br />
        <br />
        Baselines process activity in containers to automatically whitelist
        processes, eliminating the need to manually whitelist. <br />
        <br />
        Uses prebuilt policies to detect crypto mining, privilege escalation,
        and various exploits.
      </ExpandableDescription>
    </Card>
  );
}

export default DescriptionsCard;
