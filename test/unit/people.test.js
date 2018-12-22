require('dotenv').config();
const mongoose = require('mongoose');
const chai = require('chai');

const { expect } = chai;
const peopleRepository = require('../../src/repositories/people');

describe('Database connection', () => {
  before((done) => {
    mongoose.connect(
      process.env.DB_URL,
      { useNewUrlParser: true },
    );
    mongoose.set('useCreateIndex', true);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error'));
    db.once('open', () => {
      done();
    });
  });

  describe('People', () => {
    it('Creates a new Person', (done) => {
      peopleRepository
        .create({
          name: 'John Doe',
          age: 32,
          email: 'john.doe@example.test',
          bio: 'Really proactive guy',
        })
        .then((person) => {
          expect(person.email).to.equal('john.doe@example.test');
          done();
        })
        .catch((error) => {
          done();
        });
    });
    it('Retrieves all people records', (done) => {
      peopleRepository
        .getAll()
        .then((people) => {
          expect(people.length).to.greaterThan(0); // Depending on previous test
          done();
        })
        .catch(done);
    });
    it('Retrieves single person', (done) => {
      peopleRepository
        .getOne('john.doe@example.test')
        .then((person) => {
          expect(person).to.not.null;
          done();
        })
        .catch(done);
    });
  });

  after((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
    });
  });
});
