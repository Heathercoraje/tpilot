// we set global variables here
const express = require('express');
const path = require('path');
const router = express.Router();

// requiring js files
const base = require('./base');
// const timer = require('./timer');
const setting = require('./setting');
// const error = require('./error');
const insight = require('./insight');
// const login = require('./login');
const help = require('./help');

console.log('hello');
// requiring hbs files
router.get('/', base);
router.get('/help', help);
// router.get('/timer', timer);
router.get('/setting', setting);
router.get('/insight', insight);
// router.get('/login', login);
// router.use(error.client);
// router.use(error.server);

module.exports = router;
