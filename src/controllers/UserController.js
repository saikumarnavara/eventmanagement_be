const UserModel = require("../models/User");

const CreateUser = async (req, res) => {
  try {
    const { phone, email, name, password } = req.body;
    const user = new UserModel({
      phone,
      email,
      name,
      password,
    });
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log(err);
  }
};
module.exports = { CreateUser };
