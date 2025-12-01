export const AWS_PROVIDER = 'aws';
export const AWS_DEFAULT_REGION = 'us-east-1';

const cloudProviders = {
  [AWS_PROVIDER]: 'Amazon Web Services',
};

const cloudProvidersShortForm = {
  [AWS_PROVIDER]: 'AWS',
};

export const cloudProviderOptions = Object.keys(cloudProviders).map(
  (cloudProviderValue) => {
    return {
      value: cloudProviderValue,
      label: cloudProviders[cloudProviderValue],
    };
  },
);

export function cloudProviderValueToLabel(cloudProviderValue) {
  return cloudProvidersShortForm[cloudProviderValue]
    ? `Hosted by Red Hat (on ${cloudProvidersShortForm[cloudProviderValue]})`
    : 'Hosted by Red Hat';
}

export function cloudProviderLabelToValue(cloudProviderLabel) {
  const cloudProviderOption = cloudProviderOptions.find(
    (cloudProviderOption) => cloudProviderOption.label === cloudProviderLabel,
  );
  return cloudProviderOption?.value;
}
