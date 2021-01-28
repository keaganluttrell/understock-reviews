const mongoose = require('mongoose');

const mongoUri = 'mongodb://database/understock';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

module.exports = db;
