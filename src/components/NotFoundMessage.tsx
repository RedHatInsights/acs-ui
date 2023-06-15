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
  StackItem,
  Title,
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
    <EmptyState variant={EmptyStateVariant.large} {...props}>
      <EmptyStateIcon icon={ExclamationCircleIcon} color={dangerColor.value} />
      <Title headingLevel="h4" size="lg">
        {errorTitle}
      </Title>
      <EmptyStateBody>
        <Stack>
          <StackItem>{errorDescription}</StackItem>
        </Stack>
      </EmptyStateBody>
      <Button component={(props) => <AppLink {...props} to={url} />}>
        {actionText}
      </Button>
    </EmptyState>
  );
};

export default NotFoundMessage;
