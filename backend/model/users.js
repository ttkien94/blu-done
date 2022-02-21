const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },
  bod: { type: Date },
  role: { type: String, default: "user" },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
  active: { type: Number, default: 1 },
});

// const Users = mongoose.model("users", userSchema);

// module.exports = { Users, userSchema };

module.exports = mongoose.model("users", userSchema);
