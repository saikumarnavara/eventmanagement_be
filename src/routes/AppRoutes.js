const express = require("express");
const router = express.Router();
const CarouselController = require("../controllers/carousel/Carousel");

router.post(
  "/upload-carousel-data",
  CarouselController.UploadCarouselDataController
);
router.get("/get-carousel-data", CarouselController.GetCarouselDataController);
router.delete(
  "/delete-carousel-data/:id",
  CarouselController.DeleteCarouselDataController
);

module.exports = router;
