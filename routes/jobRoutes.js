const {
  getAllJobs,
  deleteJob,
  updateJob,
  createJob,
  showStats,
} = require("../controller.js/jobController");

const router = require("express").Router();

router.route("/").get(getAllJobs).post(createJob);
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteJob).patch(updateJob);

module.exports = router;
