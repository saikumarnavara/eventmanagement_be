const EventsSchema = require("../../models/Events");

const createEvent = async (req, res) => {
  try {
    const {
      category,
      title,
      description,
      location,
      price,
      service,
      thumbnail,
      banner,
      videoURL,
      gallery,
      reviews,
      date,
    } = req.body;

    // ✅ Validation: check for missing required fields
    if (
      !category ||
      !title ||
      !description ||
      !location ||
      typeof price === "undefined" ||
      !service ||
      !thumbnail ||
      !banner ||
      !videoURL ||
      !Array.isArray(gallery) ||
      gallery.length === 0 ||
      !Array.isArray(reviews) ||
      typeof date === "undefined"
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided and valid.",
      });
    }

    const newEvent = await EventsSchema.create({
      category,
      title,
      description,
      location,
      price,
      service,
      thumbnail,
      banner,
      videoURL,
      gallery,
      reviews,
      date,
    });

    return res.status(201).json({
      success: true,
      message: "Event created successfully.",
      data: newEvent,
    });
  } catch (error) {
    console.error("Error creating event:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create event.",
      error: error.message,
    });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await EventsSchema.find().sort({ createdAt: -1 }); // newest first

    return res.status(200).json({
      success: true,
      message: "Events fetched successfully.",
      data: events,
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch events.",
      error: error.message,
    });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if event exists
    const event = await EventsSchema.findById(id);
    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found.",
      });
    }

    await EventsSchema.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Event deleted successfully.",
      data: event,
    });
  } catch (error) {
    console.error("Error deleting event:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete event.",
      error: error.message,
    });
  }
};

const getEventFilters = async (req, res) => {
  try {
    const categories = await EventsSchema.distinct("category");
    const locations = await EventsSchema.distinct("location");

    // Get price range
    const prices = await EventsSchema.aggregate([
      {
        $group: {
          _id: null,
          minPrice: { $min: "$price" },
          maxPrice: { $max: "$price" },
        },
      },
    ]);

    const priceRange =
      prices.length > 0
        ? {
            min: prices[0].minPrice,
            max: prices[0].maxPrice,
          }
        : { min: 0, max: 0 };

    return res.status(200).json({
      success: true,
      message: "Filters fetched successfully",
      data: {
        categories,
        locations,
        priceRange,
      },
    });
  } catch (error) {
    console.error("Error fetching filters:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch filter data",
      error: error.message,
    });
  }
};

const getEventsByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const events = await EventsSchema.find({ category });

    if (events.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No events found for this category" });
    }

    res.status(200).json({
      success: true,
      data: events,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch events",
      error: error.message,
    });
  }
};

module.exports = {
  createEvent,
  deleteEvent,
  getEventFilters,
  getAllEvents,
  getEventsByCategory,
};
