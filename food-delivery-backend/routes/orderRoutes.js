const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const User = require("../models/User");
const protect = require("../middleware/authMiddleware");

router.post("/", protect, async (req, res) => {
  try {
    const { items, total } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newOrder = new Order({
      user: user._id,
      username: user.username,
      items,
      total,
    });

    await newOrder.save();

    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    console.error("ORDER ERROR:", error);
    res.status(500).json({ message: "Order failed" });
  }
});

module.exports = router;
