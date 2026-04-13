import React from 'react';
import { SimpleServiceWidget } from './SimpleServiceWidget';

const AcsWidget: React.FunctionComponent = () => {
  return (
    <>
      <SimpleServiceWidget
        body="Fully hosted software as a service for protecting cloud-native applications and Kubernetes."
        linkTitle="RHACS Cloud Service"
        url="/openshift/acs/overview"
      />
    </>
  );
};

export default AcsWidget;
