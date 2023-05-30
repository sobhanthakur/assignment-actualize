const mongoose = require("mongoose");
require("dotenv").config();
const db = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo DB Connected");
  } catch (err) {
    console.log("Mongo DB not Connected");
    console.error(err.message);

    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;