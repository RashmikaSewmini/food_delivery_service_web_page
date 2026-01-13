const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  companyName: String,
  businessNature: String,
  address: String,
  postcode: String,
  contactName: String,
  phone: String,
  email: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
