const OurTeamSchema = require("../../models/OurTeam");

const createTeamMember = async (req, res) => {
  try {
    const { name, position, image, description, social, joinedDate } = req.body;

    if (
      !name ||
      !position ||
      !image ||
      !description ||
      !social ||
      !joinedDate
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newMember = await OurTeamSchema.create({
      name,
      position,
      image,
      description,
      social,
      joinedDate,
    });

    res.status(201).json({
      success: true,
      message: "Team member created successfully",
      data: newMember,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getOurTeamData = async (req, res) => {
  try {
    const teamMembers = await OurTeamSchema.find();

    res.status(200).json({
      success: true,
      message: "Team members fetched successfully",
      data: teamMembers,
    });
  } catch (error) {
    console.error("Error fetching team members:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

const deleteTeamMember = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedMember = await OurTeamSchema.findByIdAndDelete(id);

    if (!deletedMember) {
      return res.status(404).json({
        success: false,
        message: "Team member not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Team member deleted successfully",
      data: deletedMember,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { getOurTeamData, createTeamMember, deleteTeamMember };
