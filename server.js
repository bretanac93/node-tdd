require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const port = process.env.APP_PORT || 3000;

const app = express();

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));

if (process.env.APP_ENV !== 'test') {
  app.use(morgan('combined'));

  mongoose.Promise = global.Promise;
  mongoose.connect(
    process.env.DB_URL,
    { useNewUrlParser: true },
    (err) => {
      if (err) {
        console.error.bind(console, err.toString());
      }
      console.log('Connected to the db');
    },
  );
}

require('./src/routes')(app);

module.exports = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
