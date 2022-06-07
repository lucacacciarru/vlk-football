const path = require('path');
require('dotenv').config({
  path: path.join(__dirname, '..', '.env.local'),
});
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
const cors = require('cors');

server.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: false,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  }),
);
server.options('*', cors());

server.use(middlewares);
server.use(router);
server.listen(process.env.JSON_SERVER_PORT, () => {
  console.log('JSON Server is running', process.env.JSON_SERVER_PORT);
});
