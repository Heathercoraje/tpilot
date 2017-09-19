module.exports = (request, response) => {
  response.render('setting', {
    activePage: {
      setting: true
    }
  });

};
