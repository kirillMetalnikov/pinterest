var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Card = new Schema({
	src: String,
  type: String,
  description: String,
  ownerID: String,
  likes: Number
});

module.exports = mongoose.model('Cards', Card);
