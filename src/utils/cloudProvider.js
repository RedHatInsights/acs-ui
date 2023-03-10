const cloudProviders = {
  aws: 'Amazon Web Services',
};

const cloudProvidersShortForm = {
  aws: 'AWS',
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
  return cloudProvidersShortForm[cloudProviderValue]
    ? `Hosted by Red Hat (on ${cloudProvidersShortForm[cloudProviderValue]})`
    : 'Hosted by Red Hat';
}

export function cloudProviderLabelToValue(cloudProviderLabel) {
  const cloudProviderOption = cloudProviderOptions.find(
    (cloudProviderOption) => cloudProviderOption.label === cloudProviderLabel
  );
  return cloudProviderOption?.value;
}
