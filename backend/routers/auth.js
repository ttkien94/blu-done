const express = require("express");
require("dotenv").config();
const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const User = require("../model/users");
const verifyToken = require("../middlewares/auth");

// @route GET api/user/
// @desc Check if user is log in
// @access Public

router.get("/", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: " user not found" });
    res.json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route POST api/user/register
// @desc Register user
// @access Public

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  //   simple validation
  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Missing username and/or password!" });
  }

  try {
    // check for existing user
    const user = await User.findOne({ username });
    if (user)
      return res
        .status(400)
        .json({ success: false, message: "Username already taken" });

    // All good
    // hashpassword
    const hashedPassword = await argon2.hash(password);

    const newUser = new User({
      username,
      password: hashedPassword,
    });
    await newUser.save();

    //return tokken
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({
      success: true,
      message: "User created successfully",
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route POST api/user/login
// @desc Log in user
// @access Public
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  //   simple validation
  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Missing username and/or password" });
  }

  try {
    //check for  existing user
    const user = await User.findOne({ username });
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "Incorrect username or password" });
    //  username found
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid)
      return res
        .status(400)
        .json({ success: false, message: "Incorrect username or password" });
    // All good
    //return tokken
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({
      success: true,
      message: "User Logged in successfully",
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
module.exports = router;
