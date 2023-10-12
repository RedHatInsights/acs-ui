import React from 'react';
import { ExclamationCircleIcon } from '@patternfly/react-icons/';
import { global_danger_color_100 as dangerColor } from '@patternfly/react-tokens';
import {
  Button,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStateProps,
  EmptyStateVariant,
  Stack,
  StackItem, EmptyStateHeader, EmptyStateFooter,
  } from '@patternfly/react-core';

import AppLink from './AppLink';

export interface NotFoundMessageProps
  extends Omit<EmptyStateProps, 'children'> {
  errorTitle?: string;
  errorDescription?: React.ReactNode;
  url: string;
  actionText: string;
}

const NotFoundMessage: React.FunctionComponent<NotFoundMessageProps> = ({
  errorTitle,
  errorDescription,
  url,
  actionText,
  ...props
}) => {
  return (
    <EmptyState variant={EmptyStateVariant.lg} {...props}>
      <EmptyStateHeader titleText={<>{errorTitle}</>} icon={<EmptyStateIcon icon={ExclamationCircleIcon} color={dangerColor.value} />} headingLevel="h4" />
      <EmptyStateBody>
        <Stack>
          <StackItem>{errorDescription}</StackItem>
        </Stack>
      </EmptyStateBody><EmptyStateFooter>
      <Button component={(props) => <AppLink {...props} to={url} />}>
        {actionText}
      </Button>
    </EmptyStateFooter></EmptyState>
  );
};

export default NotFoundMessage;
