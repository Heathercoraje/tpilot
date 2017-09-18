console.log('front-end:control.js been hit');

(function control() {
  //first, grab buttons and put time into a variable
  const buttons = document.querySelectorAll('.timer__activity');
  // now create a function to remove color change of a button being click when user clicks another button

  function removeActives() {
    buttons.forEach(button => {
      button.classList.remove('active')
    });
  }
  //now we will use this function later

  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      let target = e.target;
      console.log(target);
      //'e.target' means the individual button being clicked
      if (Array.prototype.indexOf.call(target.classList, 'timer__activity') === -1) {
        target = e.target.parentElement;
        //if icon is being click(i tag), not the button then icon will become it's button (i tag's parentelement)
      }
      //anyhow, it is being clicked whether it is icon or button with letter
      removeActives();
      target.classList.add('active'); // a button selected by user will have active class
      const task = target.id.split('__')[1];
      //when clicked, we know what activity is being done thanks to this const we saved const target = e.target
      // inside e.target, we gave them id to have an access to names of activities (id="activity__sleep")
      //
      console.log(task); //log it on console, to see if the button I click is now a task
      timer.run(task);
    });
  });

  const stopButton =
    document.querySelector('#activity__stop');
  stopButton.addEventListener('click', function(e) {
    timer.stop();
    removeActives();

  });
})(); //immediate invoking function
