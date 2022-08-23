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

import { getDateTime } from '../../utils/date';
import { cloudProviderValueToLabel } from '../../utils/cloudProvider';
import { regionValueToLabel } from '../../utils/region';

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
                  <Text component={TextVariants.h2}>{instance?.name}</Text>
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
                    <DescriptionListTerm>Time created</DescriptionListTerm>
                    <DescriptionListDescription>
                      {getDateTime(instance.created_at)}
                    </DescriptionListDescription>
                  </DescriptionListGroup>
                  <DescriptionListGroup>
                    <DescriptionListTerm>Time updated</DescriptionListTerm>
                    <DescriptionListDescription>
                      {getDateTime(instance.updated_at)}
                    </DescriptionListDescription>
                  </DescriptionListGroup>
                  <DescriptionListGroup>
                    <DescriptionListTerm>Cloud provider</DescriptionListTerm>
                    <DescriptionListDescription>
                      {cloudProviderValueToLabel(instance.cloud_provider)}
                    </DescriptionListDescription>
                  </DescriptionListGroup>
                  <DescriptionListGroup>
                    <DescriptionListTerm>Region</DescriptionListTerm>
                    <DescriptionListDescription>
                      {regionValueToLabel(instance.region)}
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
