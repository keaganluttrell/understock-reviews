const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Review = require('../database/Review');

const STATIC = path.resolve('public');
const PORT = process.env.PORT || 3003;
const app = express();

app.use(express.static(STATIC));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/reviews/:product_id', (req, res) => {
  const { limit, rating, sort } = req.query;
  const product = req.params.product_id;
  Review.find({ product_id: product, rating: +rating || { $lt: 6 } })
    .sort(`-${sort || 'review_date'}`)
    .limit(+limit)
    .exec()
    .then((reviews) => res.send(reviews));
});

app.get('/api/reviews/:product_id/images', (req, res) => {
  const product = req.params.product_id;
  Review.find({ product_id: product, 'images.0': { $exists: true } })
    .sort('-review_date')
    .limit(6)
    .exec()
    .then((images) => res.send(images));
});

app.get('/api/reviews/:product_id/images/:place', (req, res) => {
  const product = req.params.product_id;
  const { place } = req.params;
  Review.find({ product_id: product, 'images.0': { $exists: true } })
    .sort('-review_date')
    .skip(+place)
    .limit(1)
    .exec()
    .then((review) => res.send(review));
});

app.patch('/api/reviews/:product_id/:id', (req, res) => {
  const reviewId = req.params.id;
  Review.findOneAndUpdate(
    { _id: reviewId },
    { $inc: { helpful: 1 } },
    { new: true, useFindAndModify: false },
  )
    .then((review) => res.send(review));
});

app.listen(PORT, console.log('Reviews Service listening on', PORT));
