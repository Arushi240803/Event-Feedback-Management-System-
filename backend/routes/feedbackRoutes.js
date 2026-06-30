const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

router.post("/", async (req, res) => {
  const feedback = new Feedback(req.body);
  await feedback.save();
  res.json({ message: "Feedback Saved" });
});

router.get("/", async (req, res) => {
  const feedback = await Feedback.find();
  res.json(feedback);
});

module.exports = router;