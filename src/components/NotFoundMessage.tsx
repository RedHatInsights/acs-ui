import React from 'react';
import { ExclamationCircleIcon } from '@patternfly/react-icons/';

import {
  Button,
  EmptyState,
  EmptyStateBody,
  EmptyStateFooter,
  EmptyStateProps,
  EmptyStateVariant,
  Stack,
  StackItem,
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
    <EmptyState  headingLevel="h4" icon={ExclamationCircleIcon}  titleText={<>{errorTitle}</>} variant={EmptyStateVariant.lg} {...props}>
      <EmptyStateBody>
        <Stack>
          <StackItem>{errorDescription}</StackItem>
        </Stack>
      </EmptyStateBody>
      <EmptyStateFooter>
        <Button component={(props) => <AppLink {...props} to={url} />}>
          {actionText}
        </Button>
      </EmptyStateFooter>
    </EmptyState>
  );
};

export default NotFoundMessage;
