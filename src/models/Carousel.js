const mongoose = require("mongoose");

const CarouselSchema = new mongoose.Schema({
  imgURL: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("Carousel", CarouselSchema);
