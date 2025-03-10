/* eslint-disable react/prop-types */
import React from 'react';
import CheckCircleIcon from '@patternfly/react-icons/dist/dynamic/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/dynamic/icons/exclamation-circle-icon';
import PendingIcon from '@patternfly/react-icons/dist/dynamic/icons/pending-icon';
import { Flex } from '@patternfly/react-core/dist/dynamic/layouts/Flex';
import { FlexItem } from '@patternfly/react-core/dist/dynamic/layouts/Flex';
import { Spinner } from '@patternfly/react-core/dist/dynamic/components/Spinner';

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
    component: <CheckCircleIcon className="pf-v6-u-success-color-100" />,
  },
  failed: {
    message: statuses.failed,
    component: <ExclamationCircleIcon className="pf-v6-u-danger-color-100" />,
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
