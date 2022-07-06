const express = require('express');
const app = express();
const transRoute = require('./transRoute');
app.get('/transactions', (req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  next();
});
app.use(transRoute);
module.exports = app;
