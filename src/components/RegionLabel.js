/* eslint-disable react/prop-types */
import React from 'react';
import { useCloudRegions } from '../hooks/apis/useCloudRegions';
import { useMemo } from 'react';
import { AWS_PROVIDER } from '../utils/cloudProvider';
import { getRegionDisplayName } from '../utils/region';

export default function RegionLabel({ id }) {
  const { data: regions } = useCloudRegions({ provider: AWS_PROVIDER });
  const regionList = useMemo(() => regions?.items || [], [regions]);
  const region = useMemo(
    () => regionList.find((r) => r.id === id),
    [regionList, id]
  );
  return <span>{region ? getRegionDisplayName(region) : id}</span>;
}
