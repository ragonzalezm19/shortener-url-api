const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
  alias: {
    type: String,
    unique: true,
  },
  url: String,
});

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;
