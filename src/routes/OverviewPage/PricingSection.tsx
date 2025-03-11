import React from 'react';
import { Hint } from '@patternfly/react-core/dist/dynamic/components/Hint';
import { HintBody } from '@patternfly/react-core/dist/dynamic/components/Hint';

function PricingSection() {
  return (
    <Hint>
      <HintBody>
        <strong>
          Ready to purchase Red Hat Advanced Cluster Security Cloud Service?
        </strong>{' '}
        Learn more about our pricing models with{' '}
        <a href="">Amazon Marketplace (North America)</a> or{' '}
        <a href="">Amazon Marketplace (EMEA)</a>.{' '}
        <a href="https://www.redhat.com/en/technologies/cloud-computing/openshift/advanced-cluster-security-kubernetes#talk-to-a-red-hatter">
          Contact Sales (all regions)
        </a>{' '}
        to get a subscription that fits your needs.
        <div className="pf-u-mb-xl" />
        <strong>Managed CPU</strong> A managed CPU means the number of CPU
        measured on a managed cluster.
      </HintBody>
    </Hint>
  );
}

export default PricingSection;
