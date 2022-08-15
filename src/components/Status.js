/* eslint-disable react/prop-types */
import React from 'react';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  PendingIcon,
} from '@patternfly/react-icons';
import { Flex, FlexItem, Spinner } from '@patternfly/react-core';

import { statuses } from '../utils/status';

const statusMessages = {
  accepted: {
    message: statuses.accepted,
    component: <PendingIcon />,
  },
  preparing: {
    message: statuses.preparing,
    component: <PendingIcon />,
  },
  provisioning: {
    message: statuses.provisioning,
    component: <Spinner isSVG size="md" />,
  },
  ready: {
    message: statuses.ready,
    component: <CheckCircleIcon className="pf-u-success-color-100" />,
  },
  failed: {
    message: statuses.failed,
    component: <ExclamationCircleIcon className="pf-u-danger-color-100" />,
  },
  deprovision: {
    message: statuses.deprovision,
    component: <Spinner isSVG size="md" />,
  },
  deleting: {
    message: statuses.deleting,
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
