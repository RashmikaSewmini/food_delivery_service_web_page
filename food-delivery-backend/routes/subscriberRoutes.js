const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber");

// POST - Subscribe
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    // check already exists
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already subscribed" });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    res.status(201).json({ message: "Subscribed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
