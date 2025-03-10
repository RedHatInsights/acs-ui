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
  Content,
  ContentVariants,
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
                <Content>
                  <Content component={ContentVariants.small}>Name</Content>
                </Content>
                <Content>
                  <Content component={ContentVariants.h2}>{instance?.name}</Content>
                </Content>
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
