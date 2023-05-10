require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const connectDB = require("./db/connect");
// app.use(cors());
// router
const authRouter = require("./routes/authRoutes");
const jobRouter = require("./routes/jobRoutes");
// middleware
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const morgan = require("morgan");
const auth = require("./middleware/auth");

app.use(express.json());
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.json({ msg: "welcome" });
});
app.get("/api/v1", (req, res) => {
  res.json({ msg: "welcome" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", auth, jobRouter);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
