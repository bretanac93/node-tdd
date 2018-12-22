require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.APP_PORT || 3000;

const app = express();

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));

require('./src/routes')(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
