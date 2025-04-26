const mongoose = require("mongoose");

const DbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB successfully..");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = DbConnection;
