const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
  .then(() => {
    console.log('MONGO CONNECTION OPEN');
  })
  .catch((err) => {
    console.log("MONGO ERROR HAPPENED");
    console.log(err);
  });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.listen(3000, () => {
  console.log('SERVER IS LISTENING ON PORT 3000!');
});

app.get('/products', async (req, res) => {
  const products = await Product.find({});
  console.log(products)
  res.render('products/index', { products })
});