const ContactUsSchema = require("../../models/ContactUs");

const createContactUs = async (req, res) => {
  try {
    const { name, phone, message } = req.body;

    if (!name || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const contactUs = await ContactUsSchema.create({
      name: name.trim(),
      phone: phone,
      message: message.trim(),
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contactUs,
    });
  } catch (error) {
    console.error("Error in createContactUs:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const getContactedUsers = async (req, res) => {
  try {
    const contactedUsers = await ContactUsSchema.find();
    if (contactedUsers.length === 0) {
      res.status(404).json({ message: "No users contacted yet" });
    } else {
      res.status(200).json({
        message: "Users contacted",
        data: contactedUsers,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createContactUs,
  getContactedUsers,
};
