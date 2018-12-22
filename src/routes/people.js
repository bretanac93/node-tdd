const peopleController = require('../controllers/people');

module.exports = (app) => {
  app
    .route('/people')
    .get(peopleController.getAll)
    .post(peopleController.create);
  app.route('/people/:email').get(peopleController.getOne);
};
