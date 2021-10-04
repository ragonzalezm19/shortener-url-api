const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
  uid: {
    type: String,
    unique: true,
  },
  alias: {
    type: String,
    unique: true,
  },
  url: String,
});

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;
