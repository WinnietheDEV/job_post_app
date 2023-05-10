const { UnauthenticatedError } = require("../errors");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new UnauthenticatedError("unauthorized accessed");
  }

  if (!authorization.startsWith("Bearer")) {
    throw new UnauthenticatedError("unauthorized accessed");
  }

  const jwtToken = authorization.split(" ")[1];

  try {
    const verifiedToken = jwt.verify(jwtToken, process.env.JWT_SECRET);

    req.user = { userId: verifiedToken.userId };
    next();
  } catch (error) {
    throw new UnauthenticatedError("unauthorized accessed");
  }
};

module.exports = auth;
