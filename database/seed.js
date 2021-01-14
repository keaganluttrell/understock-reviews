const Review = require('./Review');
const data = require('./dataGenerator');

// db.catch((e) => e);

const seedDatabase = () => {
  Review.create(data);
};

seedDatabase();
