const express = require("express");
const router = express.Router();
const { AuthenticateToken } = require("../middleware/authenticateToken");
const CarouselController = require("../controllers/carousel/Carousel");
const ReviewController = require("../controllers/reviews/ReviewController");
const TestimonialController = require("../controllers/testmonials/TestmonialController");
const EventsController = require("../controllers/events/EventsController");
const ContactUsController = require("../controllers/contactus/ContactusController");
const OurTeamController = require("../controllers/ourteam/OurTeamController");

{
  /* Carousel Routes*/
}
router.post(
  "/upload-carousel-data",
  CarouselController.UploadCarouselDataController
);
router.get("/get-carousel-data", CarouselController.GetCarouselDataController);
router.delete(
  "/delete-carousel-data/:id",
  CarouselController.DeleteCarouselDataController
);

{
  /* Review Routes*/
}
router.get("/get-review-data", ReviewController.getReviews);
router.post("/upload-review-data", ReviewController.createReview);
router.delete("/delete-review-data/:id", ReviewController.deleteReview);

// Testmonials
router.get("/get-testimonial-data", TestimonialController.getTestimonials);
router.post(
  "/upload-testimonial-data",
  TestimonialController.createTestimonial
);
router.delete(
  "/delete-testimonial-data/:id",
  TestimonialController.deleteTestimonial
);

// Events routes
router.get("/get-events-data", EventsController.getAllEvents);
router.post(
  "/upload-events-data",
  AuthenticateToken,
  EventsController.createEvent
);
router.delete(
  "/delete-events-data/:id",
  AuthenticateToken,
  EventsController.deleteEvent
);
router.get("/get-events-filter-data", EventsController.getEventFilters);
router.get(
  "/get-events-by-category/:category",
  EventsController.getEventsByCategory
);

// Contacted routes

router.get("/get-contacted-users", ContactUsController.getContactedUsers);
router.post("/contact-admin", ContactUsController.createContactUs);

// ourteam routes
router.get("/get-our-team", OurTeamController.getOurTeamData);
router.post(
  "/create-team-member",
  AuthenticateToken,
  OurTeamController.createTeamMember
);
router.delete(
  "/delete-team-member/:id",
  AuthenticateToken,
  OurTeamController.deleteTeamMember
);

module.exports = router;
