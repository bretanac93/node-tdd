const Person = require('../models/Person');

function create({ name, email, age, bio }) {
  return Person.create({ name, email, age, bio });
}

module.exports = {
  create,
};
