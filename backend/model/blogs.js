const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const blogSchema = new Schema({
  //nối dữ liệu với bảng users theo id
  user: { type: Schema.Types.ObjectId, ref: "users" },
  title: { type: String, required: true },
  description: { type: String },
  img: { type: String },
  type: { type: String, default: "normal" },
  createAt: { type: Date, default: Date.now },
  status: { type: Boolean, default: true },
});

// const Blogs = mongoose.model("Blogs", blogSchema);

// module.exports = { Blogs, blogSchema };

module.exports = mongoose.model("blogs", blogSchema);
