/* eslint-disable react/prop-types */
import { Divider } from '@patternfly/react-core/dist/dynamic/components/Divider';
import { Drawer } from '@patternfly/react-core/dist/dynamic/components/Drawer';
import { DrawerActions } from '@patternfly/react-core/dist/dynamic/components/Drawer';
import { DrawerCloseButton } from '@patternfly/react-core/dist/dynamic/components/Drawer';
import { DrawerContent } from '@patternfly/react-core/dist/dynamic/components/Drawer';
import { DrawerContentBody } from '@patternfly/react-core/dist/dynamic/components/Drawer';
import { DrawerHead } from '@patternfly/react-core/dist/dynamic/components/Drawer';
import { DrawerPanelContent } from '@patternfly/react-core/dist/dynamic/components/Drawer';
import { Content } from '@patternfly/react-core/dist/dynamic/components/Content';
import { ContentVariants } from '@patternfly/react-core/dist/dynamic/components/Content';
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
                  <Content component={ContentVariants.h2}>
                    {instance?.name}
                  </Content>
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
