module.exports = (request, response) => {
  response.render('login', {
    activePage: {
      login: true
    }
  });
};
