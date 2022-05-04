const uuid = require('uuid');

const dinosaurs = {
  kind: 'DinosaurRequestList',
  page: '1',
  size: '20',
  total: '2',
  items: [
    {
      id: '1iSY6RQ3JKI8Q0OTmjQFd3ocFRg',
      kind: 'dinosaur',
      href: '/api/dinosaurs_mgmt/v1/dinosaurs/1iSY6RQ3JKI8Q0OTmjQFd3ocFRg',
      status: 'ready',
      cloud_provider: 'aws',
      multi_az: true,
      region: 'us-east-1',
      owner: 'api_dinosaur_service',
      name: 'serviceapi',
      host: 'serviceapi-1isy6rq3jki8q0otmjqfd3ocfrg.example.dinosaur.com',
      created_at: '2020-10-05T12:51:24.053142Z',
      updated_at: '2020-10-05T12:56:36.362208Z',
      version: '2.6.0',
      instance_type: 'standard',
    },
    {
      id: '2iSY6RQ3JKI8Q0OTmjQFd3ocFRg',
      kind: 'dinosaur',
      href: '/api/dinosaurs_mgmt/v1/dinosaurs/2iSY6RQ3JKI8Q0OTmjQFd3ocFRg',
      status: 'ready',
      cloud_provider: 'aws',
      multi_az: true,
      region: 'us-east-1',
      owner: 'api_dinosaur_service',
      name: 'mockapi',
      host: 'mockapi-2iSY6RQ3JKI8Q0OTmjQFd3ocFRg.example.dinosaur.com',
      created_at: '2020-10-05T12:51:24.053142Z',
      updated_at: '2020-10-05T12:56:36.362208Z',
      version: '2.6.0',
      instance_type: 'standard',
    },
  ],
};

async function mockDataHandler(req, res) {
  if (
    req.method === 'GET' &&
    req.url.includes('/api/dinosaurs_mgmt/v1/dinosaurs/')
  ) {
    const id = req.url.replace('/api/dinosaurs_mgmt/v1/dinosaurs/', '');
    return res.send(dinosaurs.items.find((dinosaur) => dinosaur.id === id));
  }
  if (
    req.method === 'GET' &&
    req.url.includes('/api/dinosaurs_mgmt/v1/dinosaurs')
  ) {
    return res.send(dinosaurs);
  }
  if (
    req.method === 'POST' &&
    req.url === '/api/dinosaurs_mgmt/v1/dinosaurs?async=true'
  ) {
    return new Promise((resolve) => {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => {
        const { region, cloud_provider, name, multi_az } = JSON.parse(data);
        dinosaurs.total += 1;
        const newId = uuid.v4();
        dinosaurs.items.push({
          id: newId,
          kind: 'dinosaur',
          href: '/api/dinosaurs_mgmt/v1/dinosaurs/' + newId,
          status: 'ready',
          cloud_provider,
          multi_az,
          region,
          owner: 'api_dinosaur_service',
          name,
          host: name + '-' + newId + '.example.dinosaur.com',
          created_at: '2020-10-05T12:51:24.053142Z',
          updated_at: '2020-10-05T12:56:36.362208Z',
          version: '2.6.0',
          instance_type: 'standard',
        });
        resolve(res.send({}));
      });
    });
  }
  if (
    req.method === 'DELETE' &&
    req.url.includes('/api/dinosaurs_mgmt/v1/dinosaurs/')
  ) {
    return new Promise((resolve) => {
      const id = req.url.replace('/api/dinosaurs_mgmt/v1/dinosaurs/', '');
      const newItems = dinosaurs.items.filter((item) => item.id !== id);
      dinosaurs.items = newItems;
      dinosaurs.total = newItems.length;
      resolve(res.send({}));
    });
  }
}

module.exports = mockDataHandler;
