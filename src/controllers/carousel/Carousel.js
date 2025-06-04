const carouselSchema = require("../../models/Carousel");

const UploadCarouselDataController = async (req, res) => {
  try {
    const { imgURL } = req.body;
    const carousel = new carouselSchema({
      imgURL,
    });
    await carousel.save();
    res.status(200).json({
      message: "Image uploaded successfully",
      URL: carousel.imgURL,
      id: carousel._id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const GetCarouselDataController = async (req, res) => {
  try {
    const carousel = await carouselSchema.find();
    res.status(200).json({
      message: "Carousel data fetched successfully",
      data: carousel,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const DeleteCarouselDataController = async (req, res) => {
  try {
    const { id } = req.params;
    await carouselSchema.findByIdAndDelete(id);
    res.status(200).json({
      message: "Carousel data deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

module.exports = {
  UploadCarouselDataController,
  GetCarouselDataController,
  DeleteCarouselDataController,
};
