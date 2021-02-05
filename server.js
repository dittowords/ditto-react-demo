require('dotenv').config();

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 4000;

const start = () => {
  let middleware;
  const webpack = require('webpack');
  const devMiddleware = require('webpack-dev-middleware');
  const hotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(require('./webpackConfig.js')(null, { mode: 'development' }));
  const app = express();

  middleware = devMiddleware(compiler);
  app.use(hotMiddleware(compiler));
  app.use(middleware);
  app.get('*', (req, res, next) => {
    const indexPath = path.join(path.resolve('.'), 'dist', 'index.html');
    res.end(middleware.fileSystem.readFileSync(indexPath));
  });

  app.set('host', process.env.HOST || '0.0.0.0');
  const server = app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`));
}

start();
