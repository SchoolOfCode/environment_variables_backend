import express from "express";
import path from "path";

import __dirname from "./dirname.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";

import startCleanRouter from "./routes/startClean.js";
import logCleanRouter from "./routes/logClean.js";
import joinCleanRouter from "./routes/joinClean.js";

const app = express();

app.use(logger("dev"));
app.use(cors({ origin: "https://project-cleanup.netlify.app" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/startclean", startCleanRouter);
app.use("/logclean", logCleanRouter);
app.use("/joinclean", joinCleanRouter);

app.use(function (req, res, next) {
  res
    .status(404)
    .json({ message: "We couldn't find what you were looking for 😞" });
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json(err);
});

export default app;
