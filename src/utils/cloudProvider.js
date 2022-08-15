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

export function cloudProviderLabelToValue(cloudProviderLabel) {
  const cloudProviderOption = cloudProviderOptions.find(
    (cloudProviderOption) => cloudProviderOption.label === cloudProviderLabel
  );
  return cloudProviderOption?.value;
}
