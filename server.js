const express = require('express');
const PORT = process.env.PORT || 4000;

const start = () => {
  const app = express();
  app.set('host', process.env.HOST || '0.0.0.0');
  const server = app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`));
}

start();
