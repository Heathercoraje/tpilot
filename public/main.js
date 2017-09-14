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
