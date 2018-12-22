module.exports = (app) => {
  app.route('/people').get((req, res) => {
    res.send('Hello World');
  });
};
