const express = require("express");
const {
  register,
  login,
  updateUser,
} = require("../controller.js/authController");
const auth = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser").patch(auth, updateUser);

module.exports = router;
