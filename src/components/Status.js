/* eslint-disable react/prop-types */
import React from 'react';
import { CheckCircleIcon } from '@patternfly/react-icons';
import { Flex, FlexItem, Spinner } from '@patternfly/react-core';

function Status({ status }) {
  switch (status) {
    case 'provisioning':
      return (
        <Flex>
          <FlexItem>
            <Spinner isSVG size="md" />
          </FlexItem>
          <FlexItem>Creation in progress</FlexItem>
        </Flex>
      );
    case 'ready':
      return (
        <Flex>
          <FlexItem>
            <CheckCircleIcon className="pf-u-success-color-100" />
          </FlexItem>
          <FlexItem>Ready</FlexItem>
        </Flex>
      );
    default:
      return 'N/A';
  }
}

export default Status;
