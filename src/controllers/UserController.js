const UserModel = require("../models/User");
const bcrypt = require("bcrypt");

const CreateUser = async (req, res) => {
  try {
    const { phone, email, name, password: plainPassword } = req.body;
    const password = await bcrypt.hash(plainPassword, 10);
    const user = new UserModel({
      phone,
      email,
      name,
      password,
    });
    await user.save();
    res.status(200).json({
      message: "User Created Successfully",
      status: true,
      name: user.name,
      phone: user.phone,
      email: user.email,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log(err);
  }
};
module.exports = { CreateUser };
