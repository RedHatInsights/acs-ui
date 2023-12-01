import React, { useState } from 'react';
import { Divider, ExpandableSection } from '@patternfly/react-core';

type ExpandableDescriptionProps = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

function ExpandableDescription({
  title,
  icon,
  children,
}: ExpandableDescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const onToggle = (_event: React.MouseEvent, isExpanded: boolean) => {
    setIsExpanded(isExpanded);
  };

  return (
    <ExpandableSection
      className="pf-u-box-shadow-sm-left"
      toggleContent={
        <div className="pf-c-action-list">
          {icon}
          <Divider orientation={{ default: 'vertical' }} />
          <span>{title}</span>
        </div>
      }
      onToggle={onToggle}
      isExpanded={isExpanded}
      displaySize="lg"
      isWidthLimited
    >
      {children}
    </ExpandableSection>
  );
}

export default ExpandableDescription;
