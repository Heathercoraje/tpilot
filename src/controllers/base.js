const activity = require('./../model/index');

module.exports = (request, response) => {
  response.render('base', { activePage: { base: true }, activity });
};





// const express = require('express');
// const path = require('path');
// const router = express.Router();
//
// const getHome = require('../query/getHome');
//
// router.get('/', (request, response) => {
//   getHome((error, data) => {
//     if (error) {
//       response.send('<h1>Sorry, we having problem getting your data</h1>');
//       console.log('katia', error);
//     } else {
//       // reload the page with ren1der
//       return response.render('home', { //  wtf: how does it know the entire dir name? why we do not require app.js for engine
//         data
//       });
//     }
//   });
// });
//
// module.exports = router; // ask lubel
