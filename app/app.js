const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const _config = require('../config/config')(process.env.NODE_ENV);

const indexRouter = require('./routes/index');

const app = express();

app.use(logger(_config.nodeEnv));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(indexRouter);

module.exports = app;
