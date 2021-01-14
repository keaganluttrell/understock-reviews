const Review = require('./Review');
const data = require('./dataGenerator');

const seedDatabase = () => {
  Review.create(data);
};

seedDatabase();
