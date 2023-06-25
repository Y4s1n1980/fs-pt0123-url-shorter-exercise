require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const { db } = require('./configs/db');
const corsConfig = require('./configs/cors');
const errors = require('./misc/errors');

const app = express();

app.use(cors(corsConfig));
app.use(express.json());
app.use(cookieParser());

const routes = require('./routes');

app.use(routes(db));

app.use((_, __, next) => {
  next(errors[404]);
});

app.use(({ statusCode, error }, _, res, __) => {
  res.status(statusCode).json({
    success: false,
    message: error.message,
  });
});

app.listen(
  process.env.PORT,
  () => console.info(`> listening at: ${process.env.PORT}`)
);
