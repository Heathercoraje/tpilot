console.log('hello,this is popup.js');
const express = require('express');
const path = require('path');
const router = express.Router();



router.get('/popup', (request, response) => {
  response.render('popup');

});


module.exports = router;
