const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");

const notFound = (req, res) => {
  throw new NotFoundError("not found");
};

module.exports = notFound;
