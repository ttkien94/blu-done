const express = require("express");
const router = express.Router();
const Blog = require("../model/blogs");
const verifyToken = require("../middlewares/auth");

// @route GET api/blog/getAll for admin
// @desc GET Blog
// @access Private
router.get("/", verifyToken, async (req, res) => {
  try {
    const data = req.query.type;
    if (data === "1") {
      const blogs = await Blog.find({ user: req.userId })
        .populate("user", ["username", "name"])
        .sort({ createAt: -1 });
      res.json({ success: true, blogs });
    } else {
      const blogs = await Blog.find({ user: req.userId, type: data })
        .populate("user", ["username", "name"])
        .sort({ createAt: -1 });
      res.json({ success: true, blogs });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route GET api/blog/getAll for client
// @desc GET Blog
// @access Private
router.get("/getall", async (req, res) => {
  try {
    const data = req.query.type;
    console.log(data);
    if (data === "1") {
      const blogs = await Blog.find({})
        .populate("user", ["username", "name"])
        .sort({ createAt: -1 });
      res.json({ success: true, blogs });
    } else {
      const blogs = await Blog.find({ type: data })
        .populate("user", ["username", "name"])
        .sort({ createAt: -1 });
      res.json({ success: true, blogs });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route POST api/blog/add
// @desc Add Blog
// @access Private

router.post("/add", verifyToken, async (req, res) => {
  const { title, description, img, type, createAt, status } = req.body;
  // simple validation
  console.log(img);
  if (!title)
    return res.status(400).json({
      success: false,
      message: "Title is required",
      description1: req.body,
      title1: title,
      img1: img,
    });
  // kiem tra them vài trường nữa

  // req.userId đã được gán bên middleware
  try {
    const newBlog = new Blog({
      title,
      description,
      img,
      createAt,
      status,
      type,
      user: req.userId,
    });
    await newBlog.save();
    res.json({ success: true, message: "BLog is create", blog: newBlog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route PUT api/blog/update
// @desc update Blog
// @access Private
router.put("/:id", verifyToken, async (req, res) => {
  const { title, description, img, createAt, status, type } = req.body;
  // simple validation
  if (!title)
    return res
      .status(400)
      .json({ success: false, message: "Title is required" });
  // kiem tra them vài trường nữa

  // req.userId đã được gán bên middleware
  try {
    let updateBlog = {
      title,
      description,
      img,
      createAt,
      type,
      status,
    };

    // req.params.id == :id ở url
    // new: true sẽ trả kết quả nếu thành công về
    // blogUpdateCondition must be Object
    const blogUpdateCondition = { _id: req.params.id, user: req.userId };
    updateBlog = await Blog.findOneAndUpdate(blogUpdateCondition, updateBlog, {
      new: true,
    });

    // User not authorised to update blog or post not found
    if (!updateBlog) {
      return res.status(401).json({
        success: false,
        message: "User not authorised to update blog or post not found",
      });
    }

    // All good
    res.json({ success: true, message: "Update Successed", blog: updateBlog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route DELETE api/blog/delete
// @desc DELETE Blog
// @access Private

router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const blogDeleteCondition = { _id: req.params.id, user: req.userId };
    const deletedBog = await Blog.findOneAndDelete(blogDeleteCondition);

    // User not authorised to update blog or post not found
    if (!deletedBog) {
      return res.status(401).json({
        success: false,
        message: "User not authorised to update blog or post not found",
      });
    }
    // All good
    res.json({ success: true, message: "Deleted", blog: deletedBog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
