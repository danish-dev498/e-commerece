const db = require("../models");
const { asyncHandler } = require("../utils/asyncHandler");
const { ApiResponse } = require("../utils/ApiResponse");
const { ApiError } = require("../utils/ApiErrors");

const bcryptUtil = require("../utils/bcrypt.util");
const jwtUtil = require("../utils/jwt.utils");

const color = require("colors");
const { Op } = require("sequelize");

const User = db.User;

const registerUser = asyncHandler(async (req, res, next) => {
  const { email, password, first_name, last_name, image } = req.body;

  const existingUser = await User.findOne({ where: { email: email } });

  if (existingUser) {
    throw new ApiError(409, "User with email or username already exists", []);
  }

  const hashedPassword = await bcryptUtil.createHash(password);

  const userData = {
    email: email,
    password: hashedPassword,
    first_name: first_name,
    last_name: last_name,
    image: image,
  };

  const newUser = await User.create(userData);

  if (newUser.dataValues.password) {
    delete newUser.dataValues.password;
  }
  newUser.dataValues.token = jwtUtil.createToken(newUser);

  // newUser.dataValues.bio = null;
  // newUser.dataValues.image = null;

  return res
    .status(200)
    .json(new ApiResponse(200, newUser, "Users registered successfully."));
});

//  LOGIN USER FOR

const logInUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const session = req.session;

  console.log(color.bgMagenta("-----session----", session));

  const user = await User.findOne({
    where: {
      email: email,
    },
  });

  if (!user) {
    throw new ApiError(404, "User not found", []);
  }

  // check if password matches

  const isMatchPassword = await bcryptUtil.compareHash(password, user.password);
  console.log(color.green("user", isMatchPassword));

  if (!isMatchPassword) {
    res.status(401);
    throw new Error("Invalid password or email id");
  }

  delete user.dataValues.password;

  user.dataValues.token = jwtUtil.createToken(user);

  // user.dataValues.bio = null;
  // user.dataValues.image = null;

  return res.status(200).json(new ApiResponse(200, user, "Login successful."));
});

// GET ALL USER AND FILTER

const getallUsers = asyncHandler(async (req, res) => {
  const { username, email } = req.query;

  let whereClause = {};

  if (username || email) {
    whereClause = {
      [Op.and]: [{ email: { [Op.like]: `%${email}%` } }],
    };
  }

  const allUsers = await User.findAll({
    where: whereClause,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, allUsers, "Users retrieved successfully..."));
});

// return res
//   .status(200)
//   .json(
//     new ApiResponse(
//       200,
//       { user: createdUser },
//           "Users registered successfully and verification email has been sent on your email."
//     )
//   );

module.exports = { registerUser, getallUsers, logInUser };
