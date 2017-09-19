//When user clicks STOP button, the router route this request to add.js (/add) refers to line 16,20 in index.js

module.exports = (request, response) => {
  console.log('BE: we are getting the following data from FE', request.body);

}
