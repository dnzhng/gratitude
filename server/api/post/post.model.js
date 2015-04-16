'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  date: { type: Date, default: Date.now },
  title: String,
  body: String,
  active: Boolean
});

module.exports = mongoose.model('Post', PostSchema);