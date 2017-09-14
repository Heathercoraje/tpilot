module.exports = (request, response) => {
  console.log('help page render');
  response.render('help', {
    activePage: {
      help: true
    }
  });
};
