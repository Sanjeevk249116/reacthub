const express = require("express");
const { signupPost, logInPost, chessPlayerTop, ratingHistory, postData} = require("../AllPart/data");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("get data done");
});

router.post("/signup", signupPost);
router.post("/login", logInPost);
router.get("/top-players", chessPlayerTop);
router.get("/player/:username/rating-history", ratingHistory);
router.post("/post", postData);

module.exports = { router };
