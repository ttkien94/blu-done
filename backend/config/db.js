const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Kết nối thành công đến database");
  } catch (error) {
    console.log("Kết nối thất bại đến database");
    process.exit(1);
  }
}

module.exports = { connect };
