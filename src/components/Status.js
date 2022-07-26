/* eslint-disable react/prop-types */
import React from 'react';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  PendingIcon,
} from '@patternfly/react-icons';
import { Flex, FlexItem, Spinner } from '@patternfly/react-core';

const statusMessages = {
  accepted: {
    message: 'Request accepted',
    component: <PendingIcon />,
  },
  preparing: {
    message: 'Preparing instance',
    component: <PendingIcon />,
  },
  provisioning: {
    message: 'Creation in progress',
    component: <Spinner isSVG size="md" />,
  },
  ready: {
    message: 'Ready',
    component: <CheckCircleIcon className="pf-u-success-color-100" />,
  },
  failed: {
    message: 'Request failed',
    component: <ExclamationCircleIcon className="pf-u-danger-color-100" />,
  },
  deprovision: {
    message: 'Deprovisioning instance',
    component: <Spinner isSVG size="md" />,
  },
  deleting: {
    message: 'Deleting instance',
    component: <Spinner isSVG size="md" />,
  },
};

function Status({ status }) {
  const { message, component } = statusMessages[status] || {
    message: 'N/A',
    component: null,
  };

  return (
    <Flex>
      <FlexItem>{component}</FlexItem>
      <FlexItem>{message}</FlexItem>
    </Flex>
  );
}

export default Status;
