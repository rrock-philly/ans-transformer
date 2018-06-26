const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// ======================
//   Routers
// ======================
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const v3Router = require('./routes/v3');

const app = express();

// ======================
//   Middlewares
// ======================
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ======================
//    Router Middlewares
// ======================
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/v3', v3Router);

module.exports = app;
