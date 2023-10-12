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
    component: <Spinner size="md" />,
  },
  ready: {
    message: statuses.ready,
    component: <CheckCircleIcon className="pf-v5-u-success-color-100" />,
  },
  failed: {
    message: statuses.failed,
    component: <ExclamationCircleIcon className="pf-v5-u-danger-color-100" />,
  },
  deprovision: {
    message: statuses.deprovision,
    component: <Spinner size="md" />,
  },
  deleting: {
    message: statuses.deleting,
    component: <Spinner size="md" />,
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
