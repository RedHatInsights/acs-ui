/* eslint-disable react/prop-types */
import {
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

import InstanceDetailsList from '../../components/InstanceDetailsList';

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
              {instance && <InstanceDetailsList instance={instance} />}
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
