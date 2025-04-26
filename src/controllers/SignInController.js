const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../models/User");

const SignInController = async (req, res) => {
  const SECERT_KEY = process.env.JWT_SECRET_KEY;

  try {
    const { phone, password } = req.body;
    const data = await UserModel.findOne({ phone });
    if (data) {
      let isMatched = await bcrypt.compare(password, data.password);
      if (isMatched) {
        const token = jwt.sign({ phone: phone }, SECERT_KEY, {
          expiresIn: "2m",
        });
        res.status(200).json({
          message: "Login Successfull",
          status: true,
          name: data.name,
          token: token,
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
