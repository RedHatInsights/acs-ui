/* eslint-disable react/prop-types */
import React, { ReactElement } from 'react';
import { CheckCircleIcon } from '@patternfly/react-icons';
import { Flex, FlexItem } from '@patternfly/react-core';

type StatusProps = {
  status: 'ready'; // @TODO: Add the other types
}

function Status({ status }: StatusProps): ReactElement {
  switch (status) {
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
      return <div>'N/A'</div>;
  }
}

export default Status;
