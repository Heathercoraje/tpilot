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
console.log('front-end:timer.js been hit');

const timer = (function timer() {
    const timerContainerElement = document.querySelector('#timer__container');
    const timerElement = document.querySelector('#timer__current');
    let taskName, start, timerInterval;

    function run(task) {
      if (!task || typeof task !== 'string') throw 'Task is not defined';
      if (start) {
        if (taskName === task) return //if user clicks the same activity button than current activity then don't do anything
        stop(); // else, meaning user clicks another button while the timer is still running then stop the current one then the start becomes null, because at the end of stop function, start=null;
        //therfore this it goes to else, below.
      }
      timerContainerElement.classList.add('running');
      taskName = task; //how?
      start = new Date();
      timerInterval = setInterval(() => {
        //repeat this callback function every second
        const current = new Date((Math.abs(new Date() - start))).
        toISOString().
        substr(11, 8); //to make it right format
        timerElement.innerHTML = current;
      }, 1000);
    };

    function stop() {
      if (!start) return //if there is no activty on timer don't do anything
      //else there is an activity on timer, then clear it
      clearInterval(timerInterval);
      //then resets the timer
      timerElement.innerHTML = '00:00:00';
      //timerContainerElement display becomes none again
      timerContainerElement.classList.remove('running');

      //now this is the moment a user clicks stop button, therefore the new Date will grab this exact time then subtract from start time to get the total time

      const totalSeconds = Math.round((Math.abs(new Date - start)) / 1000); //divide total by 1000 to get seconds
      console.log(totalSeconds, taskName);

      start = null; //then start time becomes 00:00:00 again;

    }
    return {
      run: run,
      stop: stop
    };
  }();





}
