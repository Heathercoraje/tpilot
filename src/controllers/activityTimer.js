console.log('hello,this is activityTimer.js');
const express = require('express');
const path = require('path');
const router = express.Router();



//url  localhost:5000/sleep/timer/12:00
module.exports = (request, response) => {
  //this should change depending of the button.innerText
  response.render('timer');
  console.log(request.params);

};
//res.params = { activity: sleep}


//display the modal
