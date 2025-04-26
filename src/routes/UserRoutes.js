const express = require("express");
const router = express.Router();
const { AuthenticateToken } = require("../middleware/authenticateToken");
const userController = require("../controllers/UserController");
const SignInController = require("../controllers/SignInController");

router.post("/signin", SignInController.SignInController);
router.post("/register", userController.CreateUser);

module.exports = router;
