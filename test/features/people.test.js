require('dotenv').config();
const chai = require('chai');
const chaiHttp = require('chai-http');
const setup = require('../setup');
const server = require('../../server');
const { expect } = chai;

chai.use(chaiHttp);

describe('Main page', () => {
  setup(); // Makes the connection to the database and dumps it after finishes.
  it('should GET mainpage message', (done) => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.equal('Welcome to people management system');
        done();
      });
  });
  it('should POST a person', (done) => {
    chai
      .request(server)
      .post('/people')
      .send({
        name: 'John Doe',
        age: 32,
        email: 'john.doe@example.test',
        bio: 'Really proactive guy',
      })
      .end((err, res) => {
        expect(res.status).equal(201);
        done();
      })
  });
  it('should GET people collection', (done) => {
    chai
      .request(server)
      .get('/people')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data.length).equal(1);
        done();
      });
  });
});
