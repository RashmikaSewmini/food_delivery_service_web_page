const express = require("express");
const router = express.Router();
const Food = require("../models/Food");

// GET all foods
router.get("/", async (req, res) => {
  const foods = await Food.find();
  res.json(foods);
});

// POST new food
router.post("/", async (req, res) => {
  const newFood = new Food(req.body);
  const savedFood = await newFood.save();
  res.json(savedFood);
});

module.exports = router;
