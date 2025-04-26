const express = require("express");
const dashboardRoutes = express.Router();
const { AuthenticateToken } = require("../../middleware/authenticateToken");

dashboardRoutes.get("/dashboard", AuthenticateToken, (req, res) => {
  res.status(200).json({
    phone: ` ${req.user.phone}`,
    status: true,
    message: "Welcome to Dashboard",
  });
});

module.exports = dashboardRoutes;
