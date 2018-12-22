const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

module.exports = () => {
  before((done) => {
    mongoServer = new MongoMemoryServer();
    mongoServer.getConnectionString().then((mongoUri) => {
      return mongoose
        .connect(
          mongoUri,
          { useNewUrlParser: true },
        )
        .then(() => done())
        .catch((err) => done);
    });
  });

  after((done) => {
    mongoose.disconnect().then(() => {
      mongoServer.stop().then(() => done());
    });
  });
};
