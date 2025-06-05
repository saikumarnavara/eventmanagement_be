const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    review: {
      type: String,
      required: [true, "Review text is required"],
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

module.exports = mongoose.model("Review", ReviewSchema);
