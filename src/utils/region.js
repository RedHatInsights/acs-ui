const regions = {
  'us-east-1': 'US-East, N. Virginia',
  'eu-west-1': 'EU-Ireland',
};

export const regionOptions = Object.keys(regions).map((regionValue) => {
  return { value: regionValue, label: regions[regionValue] };
});

export function regionValueToLabel(regionValue) {
  return regions[regionValue];
}
