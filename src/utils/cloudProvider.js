const cloudProviders = {
  aws: 'Amazon Web Services',
};

export const cloudProviderOptions = Object.keys(cloudProviders).map(
  (cloudProviderValue) => {
    return {
      value: cloudProviderValue,
      label: cloudProviders[cloudProviderValue],
    };
  }
);

export function cloudProviderValueToLabel(cloudProviderValue) {
  return cloudProviders[cloudProviderValue];
}
