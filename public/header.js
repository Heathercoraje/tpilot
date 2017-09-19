console.log('front-end:header.js been hit');

function myDate() {
  const myDate = new Date();
  const hrs = myDate.getHours();

  var greet;

  if (hrs < 12) {
    greet = 'Good Morning!</br> Click a task to start';
  } else if (hrs >= 12 && hrs <= 17) {
    greet = 'Good Afternoon!</br> Click a task to start';
  } else if (hrs >= 17 && hrs <= 24) {
    greet = 'Good Evening </br> Click a task to start';
  }
  document.getElementById('greeting').innerHTML = greet.bold();
}

myDate();
//invoking the function
