var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const {Schema} = mongoose;

const WritingSchema = new Schema({
  title: String,
  contents: String,
  date: {
    type: Date,
    default: Date.now,
  }
})

const Writing = mongoose.model('Writing', WritingSchema);

module.exports = router;
