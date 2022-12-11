const express = require('express');
const helmet = require('helmet');

const config = require('./configs');
const loaders = require('./loaders');
const { errorHandler } = require('./middlewares');
const { ApiError } = require('./errors');
const { homeRoute } = require('./routes');

config();
loaders();

const app = express();

app.use(express.json());
app.use(helmet());

app.listen(process.env.APP_PORT, () => {
  console.log(`Listening port ${process.env.APP_PORT}`);

  // routes
  app.use('/', homeRoute);

  // 404
  app.use((req, res, next) => {
    next(ApiError.notFound());
  });

  // error handler
  app.use(errorHandler);
});
