export function regionLabelToValue(regionLabel, regionList) {
  const regionOption = regionList?.find((region) => region.id === regionLabel);
  return regionOption?.id;
}

export function getRegionDisplayName(region) {
  if (!region) {
    return '';
  }
  return region.display_name || region.id;
}
