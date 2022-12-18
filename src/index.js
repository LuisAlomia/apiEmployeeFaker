const app = require('./app');
const { port } = require('./config/env.config.js');
const databaseConnect = require('./database/mongoose');

const server = () => {
  app.listen(port, () => {
    console.log('SERVER IN PORT: ' + port);
  });

  databaseConnect();
};

server();
