import React, { useState } from 'react';
import {
  Card,
  CardTitle,
  Divider,
  Drawer,
  DrawerContent,
  DrawerContentBody,
  DrawerHead,
  DrawerPanelBody,
  DrawerPanelContent,
  Flex,
  Icon,
  SimpleList,
  SimpleListItem,
  SimpleListItemProps,
  Title,
} from '@patternfly/react-core';

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
