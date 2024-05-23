const express = require("express");

const {
  registerUser,
  getallUsers,
  logInUser,
} = require("../controllers/user.controllers.js");
const { userRegisterValidator } = require("../validators/user.validators.js");
const { validate } = require("../validators/validators.js");
const { verifyJWT } = require("../middlewares/auth.middleware.js");

const router = express.Router();

router.route("/register").post(userRegisterValidator(), validate, registerUser);
router.route("/login").post(logInUser);
router.route("/getAllUsers").get(verifyJWT, getallUsers);

module.exports = router;
