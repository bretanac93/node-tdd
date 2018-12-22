const peopleController = require('../controllers/people');

module.exports = (app) => {
  app.route('/people').get(peopleController.getAll);
  app.route('/people/:email').get(peopleController.getOne);
};
