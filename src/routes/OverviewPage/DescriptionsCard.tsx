import React, { useState } from 'react';
import { Card } from '@patternfly/react-core/dist/dynamic/components/Card';
import { CardTitle } from '@patternfly/react-core/dist/dynamic/components/Card';
import { Divider } from '@patternfly/react-core/dist/dynamic/components/Divider';
import { Drawer } from '@patternfly/react-core/dist/dynamic/components/Drawer';
import { DrawerContent } from '@patternfly/react-core/dist/dynamic/components/Drawer';
import { DrawerContentBody } from '@patternfly/react-core/dist/dynamic/components/Drawer';
import { DrawerHead } from '@patternfly/react-core/dist/dynamic/components/Drawer';
import { DrawerPanelBody } from '@patternfly/react-core/dist/dynamic/components/Drawer';
import { DrawerPanelContent } from '@patternfly/react-core/dist/dynamic/components/Drawer';
import { Flex } from '@patternfly/react-core/dist/dynamic/layouts/Flex';
import { Icon } from '@patternfly/react-core/dist/dynamic/components/Icon';
import { SimpleList } from '@patternfly/react-core/dist/dynamic/components/SimpleList';
import { SimpleListItem } from '@patternfly/react-core/dist/dynamic/components/SimpleList';
import { SimpleListItemProps } from '@patternfly/react-core/dist/dynamic/components/SimpleList';
import { Title } from '@patternfly/react-core/dist/dynamic/components/Title';

import { featureDetailsMap } from './DescriptionsCardContent';

function DescriptionsCard() {
  const [featureDetailsId, setFeatureDetailsId] = useState('about-acscs');

  function onSelectListItem(
    _selectedItem:
      | React.RefObject<HTMLAnchorElement>
      | React.RefObject<HTMLButtonElement>,
    selectedItemProps: SimpleListItemProps
  ): void {
    setFeatureDetailsId(selectedItemProps.itemId as string);
  }

  const panelContent = (
    <DrawerPanelContent widths={{ xl: 'width_50' }}>
      <DrawerHead>{featureDetailsMap[featureDetailsId].title}</DrawerHead>
      <DrawerPanelBody>
        {featureDetailsMap[featureDetailsId].content}
      </DrawerPanelBody>
    </DrawerPanelContent>
  );

  return (
    <Card id="ACS-feature-descriptions">
      <CardTitle>Features and capabilities</CardTitle>
      <Divider />
      <Drawer isStatic isExpanded>
        <DrawerContent panelContent={panelContent}>
          <DrawerContentBody>
            <SimpleList onSelect={onSelectListItem}>
              {Object.keys(featureDetailsMap).map((featureKey) => {
                return (
                  <>
                    <SimpleListItem
                      key={featureKey}
                      itemId={featureKey}
                      isActive={featureKey === 'about-acscs'}
                    >
                      <Flex
                        spaceItems={{ default: 'spaceItemsSm' }}
                        className="pf-u-my-sm"
                      >
                        <Icon size="lg" color="blue">
                          {featureDetailsMap[featureKey].icon}
                        </Icon>
                        <Divider orientation={{ default: 'vertical' }} />
                        <Title headingLevel="h4">
                          {featureDetailsMap[featureKey].title}
                        </Title>
                      </Flex>
                    </SimpleListItem>
                    {featureKey !== 'runtime' && <Divider />}
                  </>
                );
              })}
            </SimpleList>
          </DrawerContentBody>
        </DrawerContent>
      </Drawer>
    </Card>
  );
}

export default DescriptionsCard;
