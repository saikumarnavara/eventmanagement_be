const express = require("express");
const router = express.Router();
const { AuthenticateToken } = require("../middleware/authenticateToken");
const userController = require("../controllers/UserController");
const SignInController = require("../controllers/SignInController");

router.post("/signin", SignInController.SignInController);
router.post("/register", userController.CreateUser);
router.get("/dashboard", AuthenticateToken, (req, res) => {
  res.status(200).json({
    phone: ` ${req.user.phone}`,
    status: true,
    message: "Welcome to Dashboard",
  });
});

module.exports = router;
