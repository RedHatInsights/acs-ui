/* eslint-disable react/prop-types */
import {
  DescriptionList,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTerm,
  Divider,
  Drawer,
  DrawerActions,
  DrawerCloseButton,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerPanelContent,
  Text,
  TextContent,
  TextVariants,
} from '@patternfly/react-core';
import React, { ReactElement, ReactNode } from 'react';
import { Instance } from '../../hooks/apis/useInstances';

import { getDateTime } from '../../utils/date';

type InstanceDetailsDrawerProps = {
  isExpanded: boolean;
  onClose: () => void;
  instance: Instance;
  children: ReactNode;
}

function InstanceDetailsDrawer({
  isExpanded,
  onClose,
  instance,
  children,
}: InstanceDetailsDrawerProps): ReactElement {
  return (
    <Drawer isExpanded={isExpanded}>
      <DrawerContent
        panelContent={
          <DrawerPanelContent>
            <DrawerHead>
              <div>
                <TextContent>
                  <Text component={TextVariants.small}>Name</Text>
                </TextContent>
                <TextContent>
                  <Text component={TextVariants.h1}>{instance?.name}</Text>
                </TextContent>
              </div>
              <DrawerActions>
                <DrawerCloseButton onClick={onClose} />
              </DrawerActions>
            </DrawerHead>
            <Divider component="div" />
            <DrawerContentBody>
              {instance && (
                <DescriptionList isHorizontal>
                  <DescriptionListGroup>
                    <DescriptionListTerm>Cloud provider</DescriptionListTerm>
                    <DescriptionListDescription>
                      {instance.cloud_provider}
                    </DescriptionListDescription>
                  </DescriptionListGroup>
                  <DescriptionListGroup>
                    <DescriptionListTerm>Region</DescriptionListTerm>
                    <DescriptionListDescription>
                      {instance.region}
                    </DescriptionListDescription>
                  </DescriptionListGroup>
                  <DescriptionListGroup>
                    <DescriptionListTerm>ID</DescriptionListTerm>
                    <DescriptionListDescription>
                      {instance.id}
                    </DescriptionListDescription>
                  </DescriptionListGroup>
                  <DescriptionListGroup>
                    <DescriptionListTerm>Owner</DescriptionListTerm>
                    <DescriptionListDescription>
                      {instance.owner}
                    </DescriptionListDescription>
                  </DescriptionListGroup>
                  <DescriptionListGroup>
                    <DescriptionListTerm>Created</DescriptionListTerm>
                    <DescriptionListDescription>
                      {getDateTime(instance.created_at)}
                    </DescriptionListDescription>
                  </DescriptionListGroup>
                  <DescriptionListGroup>
                    <DescriptionListTerm>Updated</DescriptionListTerm>
                    <DescriptionListDescription>
                      {getDateTime(instance.updated_at)}
                    </DescriptionListDescription>
                  </DescriptionListGroup>
                </DescriptionList>
              )}
            </DrawerContentBody>
          </DrawerPanelContent>
        }
      >
        {children}
      </DrawerContent>
    </Drawer>
  );
}

export default InstanceDetailsDrawer;
