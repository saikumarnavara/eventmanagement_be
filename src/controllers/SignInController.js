const UserModel = require("../models/User");

const SignInController = async (req, res) => {
  try {
    const { phone, password } = req.body;
    const data = await UserModel.findOne({ phone });
    if (data) {
      if (data.password === password) {
        res.status(200).json({
          message: "Login Successfull",
          status: true,
          name: data.name,
        });
      } else {
        res.status(404).json({
          message: "Invalid Credentials",
          status: false,
        });
      }
    } else {
      res.status(404).json({
        message: "Phone number not found",
        status: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { SignInController };
