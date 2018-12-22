const Person = require('../models/Person');

function create({ name, email, age, bio }) {
  return Person.create({ name, email, age, bio });
}

function getAll() {
  return Person.find();
}

function getOne(email) {
  return Person.findOne({ email });
}

module.exports = {
  create,
  getAll,
  getOne,
};
