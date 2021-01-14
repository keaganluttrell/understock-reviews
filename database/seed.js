const db = require('./db');
const Review = require('./Review');
const data = require('./dataGenerator');

const seedDatabase = () => {
  Review.create(data)
    .then(() => db.disconnect());
};

seedDatabase();
