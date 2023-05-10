const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
} = require("../errors");
const User = require("../model/User");

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("please provide all value");
  }
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("email is already be used");
  }
  const user = await User.create({ name, email, password });
  const jwtToken = user.createJWT();

  res.status(StatusCodes.CREATED).json({
    user: { email: user.email, location: user.location, name: user.name },
    token: jwtToken,
    location: user.location,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("please provide email and password");
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnauthenticatedError("user is not exist");
  }
  const correctPassword = await user.comparePassword(password);
  if (correctPassword) {
    const jwtToken = await user.createJWT();
    user.password = undefined;
    console.log(user, jwtToken);
    res.status(StatusCodes.OK).json({
      user,
      token: jwtToken,
      location: user.location,
    });
  } else {
    throw new UnauthenticatedError("incorrect password");
  }
};

const updateUser = async (req, res) => {
  const { email, name, lastName, location } = req.body;

  const user = await User.findOne({ _id: req.user.userId });
  if (!user) {
    throw new NotFoundError("user doesn't exist");
  }

  user.email = email || user.email;
  user.name = name || user.name;
  user.lastName = lastName || user.lastName;
  user.location = location || user.location;

  user.save();

  const token = await user.createJWT();

  res.status(StatusCodes.OK).json({ token, user, location: user.location });
};

module.exports = { register, login, updateUser };
