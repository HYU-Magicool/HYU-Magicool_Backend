var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

module.exports = router;
