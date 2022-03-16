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
import React from 'react';

function InstanceDetailsDrawer({ isExpanded, onClose, instance, children }) {
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
              <DescriptionList isHorizontal>
                <DescriptionListGroup>
                  <DescriptionListTerm>Cloud provider</DescriptionListTerm>
                  <DescriptionListDescription>
                    {instance?.cloudProvider}
                  </DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                  <DescriptionListTerm>Region</DescriptionListTerm>
                  <DescriptionListDescription>
                    {instance?.cloudRegion}
                  </DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                  <DescriptionListTerm>ID</DescriptionListTerm>
                  <DescriptionListDescription>
                    {instance?.id || 'N/A'}
                  </DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                  <DescriptionListTerm>Owner</DescriptionListTerm>
                  <DescriptionListDescription>
                    {instance?.owner || 'N/A'}
                  </DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                  <DescriptionListTerm>Created</DescriptionListTerm>
                  <DescriptionListDescription>
                    {instance?.created || 'N/A'}
                  </DescriptionListDescription>
                </DescriptionListGroup>
                <DescriptionListGroup>
                  <DescriptionListTerm>Updated</DescriptionListTerm>
                  <DescriptionListDescription>
                    {instance?.updated || 'N/A'}
                  </DescriptionListDescription>
                </DescriptionListGroup>
              </DescriptionList>
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
