const mongoose = require("mongoose");

const alienSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  empStatus: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("Alien", alienSchema);
