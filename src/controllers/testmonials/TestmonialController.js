const TestimonialSchema = require("../../models/Testmonials");

/**
 * Get all testimonials
 */
const getTestimonials = async (req, res) => {
  try {
    const testimonials = await TestimonialSchema.find();
    res.status(200).json({
      success: true,
      message: "Testimonials fetched successfully",
      data: testimonials,
    });
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch testimonials",
      error: error.message,
    });
  }
};

/**
 * Create a new testimonial
 */
const createTestimonial = async (req, res) => {
  try {
    const { groomName, brideName, description, imageURL, videoURL, rating } =
      req.body;

    // Input validation
    if (
      !groomName ||
      !brideName ||
      !description ||
      !imageURL ||
      !videoURL ||
      typeof rating === "undefined"
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newTestimonial = await TestimonialSchema.create({
      groomName,
      brideName,
      description,
      imageURL,
      videoURL,
      rating,
    });

    res.status(201).json({
      success: true,
      message: "Testimonial created successfully",
      data: newTestimonial,
    });
  } catch (error) {
    console.error("Error creating testimonial:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create testimonial",
      error: error.message,
    });
  }
};

/**
 * Delete a testimonial by ID
 */
const deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTestimonial = await TestimonialSchema.findByIdAndDelete(id);

    if (!deletedTestimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Testimonial deleted successfully",
      data: deletedTestimonial,
    });
  } catch (error) {
    console.error("Error deleting testimonial:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete testimonial",
      error: error.message,
    });
  }
};

module.exports = {
  getTestimonials,
  createTestimonial,
  deleteTestimonial,
};
