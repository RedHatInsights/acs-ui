/* eslint-disable react/prop-types */
import React from 'react';
import { useCloudRegions } from '../hooks/apis/useCloudRegions';
import { useMemo } from 'react';
import { AWS_PROVIDER } from '../utils/cloudProvider';
import { getRegionDisplayName } from '../utils/region';

export default function RegionLabel({ id }) {
  const { data: regionList } = useCloudRegions({ provider: AWS_PROVIDER });
  const regions = useMemo(() => regionList?.items || [], [regionList]);
  const region = useMemo(() => regions.find((r) => r.id === id), [regions, id]);
  return <span>{region ? getRegionDisplayName(region) : id}</span>;
}
