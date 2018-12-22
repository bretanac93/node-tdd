require('dotenv').config();
const mongoose = require('mongoose');
const chai = require('chai');

const { expect } = chai;
const peopleRepository = require('../../src/repositories/people');

describe('Database Tests', () => {
  before(done => {
    mongoose.connect(
      process.env.DB_URL,
      { useNewUrlParser: true }
    );
    mongoose.set('useCreateIndex', true);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error'));
    db.once('open', () => {
      console.log('We are connected to the test database!');
      done();
    });
  });

  describe('Test Database', () => {
    it('New person saved to test database', done => {
      peopleRepository
        .create({
          name: 'John Doe',
          age: 32,
          email: 'john.doe@example.test',
          bio: 'Really proactive guy',
        })
        .then(person => {
          expect(person.email).to.equal('john.doe@example.test');
          done();
        })
        .catch(error => {
          done();
        });
    });
  });

  after(done => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
    });
  });
});
