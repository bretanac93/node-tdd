const peopleRouter = require('./people');

module.exports = (app) => {
  app.route('/').get((req, res) => {
    res.send({
      data: 'Welcome to people management system',
    });
  });

  peopleRouter(app);
};
