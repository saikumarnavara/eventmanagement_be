const mongoose = require("mongoose");

const EventsSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    service: {
      type: String,
      required: true,
      trim: true,
    },
    thumbnail: {
      type: String,
      required: true,
      trim: true,
    },
    banner: {
      type: String,
      required: true,
      trim: true,
    },
    videoURL: {
      type: String,
      required: true,
      trim: true,
    },
    gallery: {
      type: [String], // clearly indicate it's an array of image URLs
      required: true,
      validate: {
        validator: function (arr) {
          return arr.length > 0;
        },
        message: "Gallery must contain at least one image.",
      },
    },
    reviews: {
      type: [String],
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", EventsSchema);
