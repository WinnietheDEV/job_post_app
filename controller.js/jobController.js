const Job = require("../model/Job");
const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
} = require("../errors");

const createJob = async (req, res) => {
  const { position, company } = req.body;
  if (!position || !company) {
    throw new BadRequestError("please provide company and position");
  }
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const deleteJob = (req, res) => {
  res.send("deleteJob");
};

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });

  res
    .status(StatusCodes.OK)
    .json({ jobs, totalJobs: jobs.length, numOfPages: 1 });
};
const updateJob = (req, res) => {
  res.send("updateJob");
};
const showStats = (req, res) => {
  res.send("showStats");
};

module.exports = { createJob, deleteJob, getAllJobs, updateJob, showStats };
