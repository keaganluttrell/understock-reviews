/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const STATIC = path.resolve('public');
const PORT = process.env.PORT || 3003;

const app = express();

app.use(express.static(STATIC));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, console.log('listening on', PORT));
