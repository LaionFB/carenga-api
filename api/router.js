"use strict";

const express    = require('express');
const routes     = express.Router();
const authEngine = require('../authentication/auth');

let account      = require('./account/account.controller');

routes.use('/account', account);

module.exports = routes;
