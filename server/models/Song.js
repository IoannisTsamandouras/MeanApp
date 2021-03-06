var mongoose = require('mongoose');

// Create the schema
var SongSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

// Export the model
module.exports = mongoose.model('movie', SongSchema);
