const express = require("express");
const { signupPost, logInPost} = require("../AllPart/data");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("get data done");
});

router.post("/signup", signupPost);
router.post("/login", logInPost);

module.exports = { router };
