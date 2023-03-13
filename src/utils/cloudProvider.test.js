import { cloudProviderValueToLabel } from './cloudProvider';

describe('cloudProvider', () => {
  describe('cloudProviderValueToLabel', () => {
    it('should return a string containing a known cloud provider', () => {
      const cloudProviderValue = 'aws';
      const cloudProviderDisplayValue =
        cloudProviderValueToLabel(cloudProviderValue);
      expect(cloudProviderDisplayValue).toBe('Hosted by Red Hat (on AWS)');
    });

    it('should return a generic string if the cloud provider is unrecognized', () => {
      const cloudProviderValue = 'fly-by-nigh-cheap-web-hosting';
      const cloudProviderDisplayValue =
        cloudProviderValueToLabel(cloudProviderValue);
      expect(cloudProviderDisplayValue).toBe('Hosted by Red Hat');
    });
  });
});
