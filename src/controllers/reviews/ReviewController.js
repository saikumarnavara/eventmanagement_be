const ReviewSchema = require("../../models/Review");

/**
 * Fetch all reviews
 */
const getReviews = async (req, res) => {
  try {
    const reviews = await ReviewSchema.find();

    res.status(200).json({
      success: true,
      message: "Reviews fetched successfully",
      data: reviews,
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

/**
 * Create a new review
 */
const createReview = async (req, res) => {
  try {
    const { name, review, rating } = req.body;

    // Basic input validation
    if (!name || !review || typeof rating === "undefined") {
      return res.status(400).json({
        success: false,
        message: "Name, review, and rating are required",
      });
    }

    const newReview = await ReviewSchema.create({ name, review, rating });

    res.status(201).json({
      success: true,
      message: "Review created successfully",
      data: newReview,
    });
  } catch (error) {
    console.error("Error creating review:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create review",
      error: error.message,
    });
  }
};

/**
 * Delete a review by ID
 */
const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedReview = await ReviewSchema.findByIdAndDelete(id);

    if (!deletedReview) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Review deleted successfully",
      data: deletedReview,
    });
  } catch (error) {
    console.error("Error deleting review:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete review",
      error: error.message,
    });
  }
};

module.exports = {
  createReview,
  deleteReview,
  getReviews,
};
