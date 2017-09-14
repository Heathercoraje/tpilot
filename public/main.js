// /* generic XHR request */
//
// function makeRequest(method, url, done) {
//   var xhr = new XMLHttpRequest();
//   xhr.onerror = function() {
//     done("error" + xhr.responseType);
//   };
//   xhr.onload = function() {
//     done(null, xhr.responseText);
//   };
//   xhr.open("GET", url, true);
//   xhr.send();
// }
//
// function update(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     var totalData = JSON.parse(data);
//     /*have to send this data to html tag */
//     var totaltime = document.querySelector('#totalTime');
//   }
// };
// console.log('This is Tilot front-end main.js');
//
// var activity = document.querySelector('#activity');
//
// activity.addEventListener('click', function(event) {
//   // when click any of those button, it leads to a // new page
//   makeRequest('GET', '/help', function(error, response) {
//     if (error) {
//       throw error;
//     } else
//   });
// });
//
//
//
// // var stopButton = document.querySelector('#stopButton');
// //
// // stopButton.addEventListener('click', function(event) { // go back to base page and update total time
// //   request('/', update);
// // });
