const utils = require('./utils');

const seedDB = () => {
  const products = [];
  for (let id = 0; id < 100; id += 1) {
    const reviews = [];
    const randomReviewCount = Math.floor(Math.random() * 30) + 1;
    for (let r = 0; r < randomReviewCount; r += 1) {
      const review = {
        product_id: id,
        customer_name: utils.randomName(),
        review_body: utils.randomBody(),
        review_title: utils.randomTitle(),
        rating: utils.randomRating(),
        verified_purchase: utils.randomVerification(),
        images: utils.randomImages(),
        review_date: utils.randomDate(),
      };
      reviews.push(review);
    }
    products.push(reviews);
  }

  return products.flat();
};
const data = seedDB();

module.exports = data;
