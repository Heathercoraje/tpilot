module.exports = (request, response) => {


  //bring query to get data from database
  //do calculation

  response.render('insight', {
    activePage: {
      insight: true
    },
    //  data
  });
};
