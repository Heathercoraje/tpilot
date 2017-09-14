module.exports = (request, response) => {
  response.render('insight', {
    activePage: {
      insight: true
    }
  });
};
