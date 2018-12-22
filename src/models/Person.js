const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    unique: true,
  },
  bio: {
    type: String,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Person', PersonSchema);
