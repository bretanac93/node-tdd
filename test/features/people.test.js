require('dotenv').config();
const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../../server');
const { expect } = chai;

chai.use(chaiHttp);

describe('Main page', () => {
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
});
