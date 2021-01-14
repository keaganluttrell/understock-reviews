const utils = require('./utils');

const data = [];
const NUMBER_OF_PRODUCTS = 100;
module.exports = data;

/*
customer_name mix of full first name, last initial

review_body lorem ipsum
review_title madlibs
rating: random from 1 to 5
verified_purchase
images
random date within the last year
new date with MM/DD/20YY
*/

const review = {
  product_id: 0,
  customer_name: '',
  review_body: '',
  review_title: '',
  rating: 0,
  verified_purchase: false,
  images: [],
  review_date: new Date(),
};
