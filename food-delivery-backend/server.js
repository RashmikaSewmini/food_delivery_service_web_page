const express = require("express"); // Importing Express framework
const mongoose = require("mongoose"); // Importing Mongoose for MongoDB interaction
const cors = require("cors"); // Importing CORS middleware
require("dotenv").config(); // Loading environment variables

const connectDB = require("./config/db");
connectDB();

const foodRoutes = require("./routes/foodRoutes"); // Importing food routes

const app = express(); // Creating an Express application

// Middlewares
app.use(cors()); // Enabling CORS
app.use(express.json()); // Parsing JSON request bodies

// Routes
app.use("/api/foods", foodRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Food Delivery Backend Running");
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


const subscriberRoutes = require("./routes/subscriberRoutes");
app.use("/api/subscribe", subscriberRoutes);

const orderRoutes = require("./routes/orderRoutes");
app.use("/api/orders", orderRoutes);

const contactRoutes = require("./routes/contactRoutes");
app.use("/api/contact", contactRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const ratingRoutes = require("./routes/ratingRoutes");

app.use("/api/ratings", ratingRoutes);

