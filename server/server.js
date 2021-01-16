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

app.get('/:product_id/reviews', (req, res) => {
  const { limit } = req.query;

  const product = req.params.product_id;
  Review.find({ product_id: product })
    .sort('-review_date')
    .limit(+limit)
    .exec()
    .then((reviews) => res.send(reviews));
});

app.listen(PORT);
