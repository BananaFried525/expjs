const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const _config = require('../config/config')(process.env.NODE_ENV);
const router = require('./routes/index');
import { Response } from './services/response';
import { DbModule } from './db/db';

const app = express();
const _response = new Response();

const db = new DbModule();
db.startUp();

app.use(logger(_config.nodeEnv));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1', router);
app.use('/**', (req, res, next) => next({ code: 404, msg: `not found` }));
app.use(_response.catchError);

module.exports = app;
