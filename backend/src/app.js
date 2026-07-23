const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  console.log("GET / route was called");

  res.json({
    status: "success",
    message: "🔥 Nodemon is Working!",
  });
});

module.exports = app;