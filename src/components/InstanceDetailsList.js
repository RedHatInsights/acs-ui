/* eslint-disable react/prop-types */
import React from 'react';
import {
  DescriptionList,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTerm,
} from '@patternfly/react-core';

import { getDateTime } from '../utils/date';
import { cloudProviderValueToLabel } from '../utils/cloudProvider';
import { regionValueToLabel } from '../utils/region';

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
          {regionValueToLabel(instance.region)}
        </DescriptionListDescription>
      </DescriptionListGroup>
      <DescriptionListGroup>
        <DescriptionListTerm>ID</DescriptionListTerm>
        <DescriptionListDescription>{instance.id}</DescriptionListDescription>
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
        <DescriptionListTerm>Central API Endpoint</DescriptionListTerm>
        <DescriptionListDescription>
          {instance.centralDataURL}
        </DescriptionListDescription>
      </DescriptionListGroup>
      <DescriptionListGroup>
        <DescriptionListTerm>Central UI</DescriptionListTerm>
        <DescriptionListDescription>
          {instance.centralUIURL}
        </DescriptionListDescription>
      </DescriptionListGroup>
    </DescriptionList>
  );
}

export default InstanceDetailsList;
