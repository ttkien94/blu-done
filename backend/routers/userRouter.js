const express = require("express");
const router = express.Router();
const { User } = require("../model/users");

router.post("/create_user", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({ ...req.body });
    await newUser.save();
    res.send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
