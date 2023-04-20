export function regionLabelToValue(regionLabel, regionList) {
  const regionOption = regionList?.find((region) =>
    region.display_name.startsWith(regionLabel)
  );
  return regionOption?.id;
}

export function getRegionDisplayName(region) {
  return region.display_name || region.id;
}
