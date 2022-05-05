const uuid = require('uuid');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router({ dinosaurs: [] });
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    const { region, cloud_provider, name, multi_az } = req.body;
    const newId = uuid.v4();
    const newDinosaur = {
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
    };
    req.body = newDinosaur;
  }
  // Continue to JSON Server router
  next();
});

// Add this before server.use(router)
server.use(
  jsonServer.rewriter({
    '/api/dinosaurs_mgmt/v1/dinosaurs\\?*': '/dinosaurs',
    '/api/dinosaurs_mgmt/v1/dinosaurs/:id': '/dinosaurs/:id',
  })
);

// Use default router
server.use(router);
server.listen(4000, () => {
  console.log('JSON Server is running');
});

// In this example, returned resources will be wrapped in a body property
router.render = (req, res) => {
  console.log(res);
  if (req.method === 'GET' && req.url === '/dinosaurs') {
    res.jsonp({
      kind: 'DinosaurRequestList',
      page: '1',
      size: '20',
      total: res.locals.data.length,
      items: res.locals.data,
    });
  } else {
    res.jsonp(res.locals.data);
  }
};
