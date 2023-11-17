import React from 'react';
import { Hint, HintBody } from '@patternfly/react-core';

function PricingSection() {
  return (
    <Hint>
      <HintBody>
        <b>Ready to purchase Advanced Cluster Security?</b> Learn more about our
        pricing models with <a href="">Amazon Marketplace (North America)</a> or{' '}
        <a href="">Amazon Marketplace (EMEA)</a>.{' '}
        <a href="https://www.redhat.com/en/technologies/cloud-computing/openshift/advanced-cluster-security-kubernetes#talk-to-a-red-hatter">
          Contact Sales (all regions)
        </a>{' '}
        to get a prepaid subscription that fits your needs.
        <br />
        <br />
        <b>Managed CPU</b> A managed CPU means the number of CPU measured on a
        managed cluster.
        <br />
        $0.03 / hour
      </HintBody>
    </Hint>
  );
}

export default PricingSection;
