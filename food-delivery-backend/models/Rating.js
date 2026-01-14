const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  product: {
    type: String, 
    required: true
  },
  value: {
    type: Number,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Rating", ratingSchema);
