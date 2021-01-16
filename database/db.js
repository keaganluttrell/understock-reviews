const mongoose = require('mongoose');

const mongoUri = 'mongodb://127.0.0.1:27017/understock';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

module.exports = db;
