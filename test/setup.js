const mongoose = require('mongoose');

module.exports = () => {
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

  after((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
    });
  });
};
