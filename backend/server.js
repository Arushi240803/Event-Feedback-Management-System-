const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const feedbackRoutes = require("./routes/feedbackRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/feedback", feedbackRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Event Feedback Backend API");
});

mongoose.connect("mongodb://127.0.0.1:27017/eventFeedbackDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});