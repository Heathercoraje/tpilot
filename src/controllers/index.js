// we set global variables here
const express = require('express');
const path = require('path');
const router = express.Router();

const base = require('./base');
const timer = require('./timer');
const setting = require('./setting');
const error = require('./error');
const insight = require('./insight');
const login = require('./login');

router.get('/', base);
router.get('/timer', timer);
router.get('/setting', setting);
router.get('/insight', insight);
router.get('/login', login);
router.use(error.client);
router.use(error.server);

module.exports = router;
