//app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const product = require('./routes/product.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
let dev_db_url = 'mongodb://someuser:abcd1234@ds131373.mlab.com:31373/productstutorial';
let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 5500;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});