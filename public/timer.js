// generic XHR request
//this request taks 4 arguments
//menthod, then url which you decide then payload which is what you want to send back to BE and done is a callback function you need once you get the request

function makeRequest(method, url, payload, done) {
  var xhr = new XMLHttpRequest();
  //callback(done) has 2 arguments refers to line 65, when we call this function, so done(error) means the first argument exist (aka.error)
  //so there it will console.log(error) then done with the callback function
  xhr.onerror = function() {
    done("this is error");
  };

  ///if the request has been sent succeefully then we call the callback function again with two arguments, which are null (aka,no error)
  //and responseText as response then refering to line 72, it will console.log(response)
  xhr.onload = function() {
    done(null, xhr.responseText);
  };
  console.log(payload);
  xhr.open(method, url, true);
  ``
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(payload); //since we use post, we send payload to backend when we hit given url
};

console.log('front-end:timer.js been hit');

const timer = (function timer() {
  const timerContainerElement = document.querySelector('#timer__container');
  const timerElement = document.querySelector('#timer__current');
  const greeting = document.querySelector('#greeting');
  const activityContainer = document.querySelector('#activity__container');
  let taskName, start, timerInterval;

  function run(task) {
    if (!task || typeof task !== 'string') throw 'Task is not defined';
    if (start) {
      if (taskName === task) return //if user clicks the same activity button than current activity then don't do anything
      stop(); // else, meaning user clicks another button while the timer is still running then stop the current one then the start becomes null, because at the end of stop function, start=null;
      //therfore this it goes to else, below.
    }
    greeting.classList.add('timeractive');
    timerContainerElement.classList.add('running');
    taskName = task; //how?
    start = new Date();
    timerInterval = setInterval(() => {
      //repeat this callback function every second
      const current = new Date((Math.abs(new Date() - start))).
      toISOString(). //1991-00-00-00
      substr(11, 8); //to make it right format
      timerElement.innerHTML = current;
    }, 1000);
  };

  function stop() {
    if (!start) return //if there is no activty on timer don't do anything
    //else, if there is an activity on timer, then clear the function
    clearInterval(timerInterval);
    //then resets the timer
    timerElement.innerHTML = '00:00:00';
    //timerContainerElement display becomes none again
    // 
    greeting.classList.remove('timeractive');
    timerContainerElement.classList.remove('running');

    //now this is the moment a user clicks stop button, therefore the new Date will grab this exact time then subtract from start time to get the total time

    const totalSeconds = Math.round((Math.abs(new Date - start))); //I've remove /1000 for now just in order to put them into DB
    console.log(totalSeconds, taskName);
    console.log(new Date(totalSeconds).toISOString());



    //make api
    //data is what we are sending to BE
    let data = JSON.stringify({
      totalSeconds,
      taskName
    }); // make it into an object

    makeRequest('POST', '/add', data, function(error, response) {
      if (error) {
        console.log(error);
      } else console.log('from timer.js 74, this is the reponse: ' +
        response);
    });
    // after the stop button clicked, api call is made to send data, let's see what is response

    start = null; //then start time becomes 00:00:00 again;

  }
  return {
    run: run,
    stop: stop
  };
})();
