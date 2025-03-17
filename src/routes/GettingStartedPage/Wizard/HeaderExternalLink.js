import React from 'react';
import { Button } from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';

const HeaderExternalLink = () => {
  return (
    <Button
      component="a"
      variant="link"
      icon={<ExternalLinkAltIcon />}
      iconPosition="right"
      isInline
      href="https://docs.openshift.com/acs/3.74/installing/getting-started-rhacs-cloud-ocp.html"
      target="_blank"
      aria-label="Help with ACS setup"
    >
      Help with ACS setup
    </Button>
  );
};

export default HeaderExternalLink;
