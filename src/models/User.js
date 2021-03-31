const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 50,
  },
  email: {
    type: String,
    required: true,
    min: 3,
    max: 100,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 200,
  },
  avatar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'File'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', User);