require('dotenv').config();
const chai = require('chai');

const { expect } = chai;
const setup = require('../setup');
const peopleRepository = require('../../src/repositories/people');

describe('Database connection', () => {
  setup();
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
});
