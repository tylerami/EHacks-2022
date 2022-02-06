const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Pitch = require("../models/pitch");
const { request } = require("express");

// Get User
router.get("/user", (req, res, next) => {
  User.find({ username: req.query.username }, [
    "username",
    "name",
    "bio",
    "skills",
  ]) // get data
    .then((data) => res.json(data)) // send data in json response
    .catch(next); // catch any errors
});

// Add User
router.post("/user", (req, res, next) => {
  User.create(req.body)
    .then((data) => res.json(data))
    .catch(next);
});

// Get Pitch
router.get("/pitch", (req, res, next) => {
  User.find({}) // get data
    .then((data) => res.json(data)) // send data in json response
    .catch(next); // catch any errors
});

// Create a Pitch
router.post("/pitch", (req, res, next) => {
  Pitch.create(req.body)
    .then((data) => res.json(data))
    .catch(next);
});

// Comment on pitch
router.put("/comment", (req, res, next) => {
  const pitch = Pitch.findById(req.body.pitchID);
  pitch.comments.push({
    author: req.body.author,
    body: req.body.body,
    date: "2022-02-05",
  });
  pitch.save();
});

// Like Pitch
router.put("/pitch", (req, res, next) => {
  const pitch = Pitch.find({ _id: req.body.pitchID });
  pitch.likes += 1;
  pitch.save();
});

module.exports = router;
