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

// Good morning/evening \\
console.log('header');
function myDate () {
  const myDate = new Date();
  const hrs = myDate.getHours();

  var greet;

  if (hrs < 12) {
    greet = 'Good Morning';
  } else if (hrs >= 12 && hrs <= 17) {
    greet = 'Good Afternoon';
  } else if (hrs >= 17 && hrs <= 24) {
    greet = 'Good Evening';
  }
  document.getElementById('lblGreetings').innerHTML = '<b>' + greet + '</b> and welcome to  Tpilot';
}
myDate();

// function add (x,y) {
//   return x + y
// }
//
// add(10, 20)
