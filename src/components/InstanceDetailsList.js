/* eslint-disable react/prop-types */
import React from 'react';
import { ClipboardCopy } from '@patternfly/react-core/dist/dynamic/components/ClipboardCopy';
import { DescriptionList } from '@patternfly/react-core/dist/dynamic/components/DescriptionList';
import { DescriptionListDescription } from '@patternfly/react-core/dist/dynamic/components/DescriptionList';
import { DescriptionListGroup } from '@patternfly/react-core/dist/dynamic/components/DescriptionList';
import { DescriptionListTerm } from '@patternfly/react-core/dist/dynamic/components/DescriptionList';

import { getDateTime } from '../utils/date';
import { cloudProviderValueToLabel } from '../utils/cloudProvider';
import RegionLabel from './RegionLabel';

function InstanceDetailsList({ instance }) {
  return (
    <DescriptionList isHorizontal>
      <DescriptionListGroup>
        <DescriptionListTerm>Cloud provider</DescriptionListTerm>
        <DescriptionListDescription>
          {cloudProviderValueToLabel(instance.cloud_provider)}
        </DescriptionListDescription>
      </DescriptionListGroup>
      <DescriptionListGroup>
        <DescriptionListTerm>Region</DescriptionListTerm>
        <DescriptionListDescription>
          <RegionLabel id={instance.region} />
        </DescriptionListDescription>
      </DescriptionListGroup>
      <DescriptionListGroup>
        <DescriptionListTerm>ID</DescriptionListTerm>
        <DescriptionListDescription>
          <ClipboardCopy
            hoverTip="Copy"
            clickTip="Copied"
            variant="inline-compact"
          >
            {instance.id}
          </ClipboardCopy>
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
        <DescriptionListTerm>
          Central API endpoint (Sensor mTLS)
        </DescriptionListTerm>
        <DescriptionListDescription>
          <ClipboardCopy
            hoverTip="Copy"
            clickTip="Copied"
            variant="inline-compact"
          >
            {instance.centralDataURL || '-'}
          </ClipboardCopy>
        </DescriptionListDescription>
      </DescriptionListGroup>
      <DescriptionListGroup>
        <DescriptionListTerm>Central instance (UI, roxctl)</DescriptionListTerm>
        <DescriptionListDescription>
          <ClipboardCopy
            hoverTip="Copy"
            clickTip="Copied"
            variant="inline-compact"
          >
            {instance.centralUIURL || '-'}
          </ClipboardCopy>
        </DescriptionListDescription>
      </DescriptionListGroup>
    </DescriptionList>
  );
}

export default InstanceDetailsList;
