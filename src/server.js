const app = require('./app');

app.listen(app.get('port'), () => {
  console.log('Tpilot is running on: ', app.get('port'));
});
