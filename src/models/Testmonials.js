const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema(
  {
    groomName: {
      type: String,
      required: [true, "Groom's name is required"],
      trim: true,
    },
    brideName: {
      type: String,
      required: [true, "Bride's name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    imageURL: {
      type: String,
      required: [true, "Image URL is required"],
      trim: true,
    },
    videoURL: {
      type: String,
      required: [true, "Video URL is required"],
      trim: true,
    },
    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: [1, "Rating must be at least 1"],
      max: [5, "Rating must be at most 5"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Testimonial", TestimonialSchema);
