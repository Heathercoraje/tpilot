//this is query

const dbConnection = require('../database/db_connection');

const addTime = (user_id, activity, today_date, activity_time, callback) => {

  const timeInsertQuery = 'INSERT INTO addActivityTime(user_id, activity, today_date, activity_time) VALUES ($1, $2, $3, $4);';

  const timeDetailArray = [user_id, activity, today_date, activity_time];

  dbConnection.query(timeInsertQuery, timeDetailArray, callback)
};

module.exports = addTime;
// addTime is a function takes columns/values to put into database and callback to make sure whether this work or not
