const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
    const {
      companyName,
      businessNature,
      address,
      postcode,
      contactName,
      phone,
      email,
      message,
    } = req.body;

    const newContact = new Contact({
      companyName,
      businessNature,
      address,
      postcode,
      contactName,
      phone,
      email,
      message,
    });

    await newContact.save();

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
