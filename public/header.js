console.log('front-end:header.js been hit');

function myDate() {
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
  document.getElementById('greeting').innerHTML = (greet + ', Heather').bold() + '<br> Click a task to start';
}
myDate();
