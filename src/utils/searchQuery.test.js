import { filtersToSearchQuery } from './searchQuery';

describe('searchQuery', () => {
  describe('filtersToSearchQuery', () => {
    it('should return an empty search query', () => {
      const filters = {};
      const searchQuery = filtersToSearchQuery(filters);
      expect(searchQuery).toBe('');
    });

    it('should return the correct search query for the name category', () => {
      const filters = {
        name: ['sc-test-1'],
      };
      const searchQuery = filtersToSearchQuery(filters);
      expect(searchQuery).toBe('(name = sc-test-1)');
    });

    it('should return the correct search query for the region category', () => {
      const filters = {
        region: ['US-East, N. Virginia', 'EU-Ireland'],
      };
      const searchQuery = filtersToSearchQuery(filters);
      expect(searchQuery).toBe('(region = us-east-1 or region = eu-west-1)');
    });

    it('should return the correct search query for the owner category', () => {
      const filters = {
        owner: ['schaudhr'],
      };
      const searchQuery = filtersToSearchQuery(filters);
      expect(searchQuery).toBe('(owner = schaudhr)');
    });

    it('should return the correct search query for the status category', () => {
      const filters = {
        status: [
          'Request accepted',
          'Creation pending',
          'Creation in progress',
          'Ready',
          'Failed',
          'Deprovisioning',
          'Deleting',
        ],
      };
      const searchQuery = filtersToSearchQuery(filters);
      expect(searchQuery).toBe(
        '(status = accepted or status = preparing or status = provisioning or status = ready or status = failed or status = deprovision or status = deleting)'
      );
    });
  });
});
