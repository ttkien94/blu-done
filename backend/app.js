require("dotenv/config");
const express = require("express");
const authRouter = require("./routers/auth");
const blogRouters = require("./routers/blogRouter");
const fs = require("fs");
const { uploadImageSingle } = require("./middlewares/upload-image-middlewares");
// const multiparty = require("connect-multiparty");
// const MultipartyMiddleware = multiparty({ uploadDir: "./images" });
const cors = require("cors");
const path = require("path");

// const bcrypt = require("bcrypt");
// const userRouters = require("./routers/userRouter");

//connect Database = cách gọi hàm connect
const db = require("./config/db");
db.connect();
const publicPathDirectory = path.join(__dirname, "./images");

// express app
const app = express();
app.use(express.json());
app.use(cors());
app.use("/images", express.static(publicPathDirectory));
app.use("/api/auth", authRouter);
app.use("/api/blog", blogRouters);

// "middleware multer "upload.single('formImage')" xử lý upload single file
// ví dụ sử dụng cho upload 1 ảnh như: avatar, cover,...
/* 
    Lưu ý: upload.single('formImage') - tên của thuộc tính name trong input 
    phải giống với 'formImage" trong hàm upload.single
*/

app.post("/api/uploadimage", uploadImageSingle("formImage"), (req, res) => {
  const file = req.file;
  if (!file) {
    res.status(400).json({
      successImage: false,
      messageImage: "Upload file again! ",
    });
  } else {
    res.json({
      successImage: true,
      messageImage: file.path,
    });
  }
});

app.post("/api/deleteimage", (req, res) => {
  try {
    const { data } = req.body;
    console.log("body:", data);
    fs.unlinkSync(data);
    res.json({ success: true, message: "Image is deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server listening to port: 5000");
});
