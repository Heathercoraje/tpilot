const express = require('express');
const exhbs = require('express-handlebars');
const path = require('path');
const favicon = require('serve-favicon');
const app = express();
const controllers = require('./controllers/index.js');
const bodyParser = require('body-parser')
// const helpers = require('./views/helpers');

// set up engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exhbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main'
    //  helpers: helpers
  }));

app.set('port', process.env.PORT || 5000);
// app.use(favicon(path.join(__dirname, '..', 'public', 'images', 'favicon.ico')));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(controllers);
// express()use
//  why error :app.use() requires middleware functions

module.exports = app;
