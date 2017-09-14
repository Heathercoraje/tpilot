module.exports = (request, response) => {
  response.render('help', {
    activePage: {
      help: true
    }
  });
};
