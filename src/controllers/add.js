//When user clicks STOP button, the router route this request to add.js (/add) refers to line 16,20 in index.js
const addTime = require('../query/addTime');



module.exports = (request, response) => {
  const user_id = '0';
  const activity = request.body.taskName;
  const today_date = new Date();
  const activity_time = new Date(request.body.totalSeconds).toISOString().substr(11, 8);
  console.log(activity_time);

  addTime(user_id, activity, today_date, activity_time, (error, res) => {
    if (error) {
      console.log('failed to add data to DB')
      console.log(error)
      return
    }
    console.log(res);
    response.send('Data has been added to DB')
  });
}
