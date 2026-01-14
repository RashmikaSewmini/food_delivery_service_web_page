const express = require("express");
const router = express.Router();
const Rating = require("../models/Rating");
const protect = require("../middleware/authMiddleware");

router.post("/", protect, async (req, res) => {
  try {
    const { product, value } = req.body;

    // Check if user already rated this product
    const existing = await Rating.findOne({
      user: req.user.id,
      product
    });

    if (existing) {
      existing.value = value;
      await existing.save();
    } else {
      await Rating.create({
        user: req.user.id,
        product,
        value
      });
    }

    const ratings = await Rating.find({ product });

    const totalUsers = ratings.length;
    const avgRating =
      ratings.reduce((sum, r) => sum + r.value, 0) / totalUsers;

    res.json({
      message: "Rating saved",
      totalUsers,
      avgRating: avgRating.toFixed(1)
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Rating failed" });
  }
});

module.exports = router;
