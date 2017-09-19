console.log('hello, this is controllers/index.js');
// we set global variables here
const express = require('express');
const path = require('path');
const router = express.Router();

// requiring js files
const base = require('./base');
const add = require('./add');
const insight = require('./insight');
const setting = require('./setting');
const help = require('./help');
// const error = require('./error');
// const login = require('./login');

// requiring hbs files
router.get('/', base);
router.post('/add', add);
router.get('/help', help);
router.get('/setting', setting);
router.get('/insight', insight);
// router.get('/login', login);
// router.use(error.client);
// router.use(error.server);

module.exports = router;
