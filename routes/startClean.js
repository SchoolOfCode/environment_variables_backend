import express from "express";
const router = express.Router();
import {
  getStartClean,
  postCleanup,
  getTotalCleans,
} from "../models/startClean.js";

//Route to GET all entries in start a clean table
router.get("/", async function (req, res) {
  const result = await getStartClean();
  res.status(200).json({ success: true, payload: result.rows });
});

//Route to GET total number of cleans done
router.get("/totalcleans", async function (req, res) {
  const result = await getTotalCleans();
  res.status(200).json({ success: true, payload: result.rows });
});

//Post
router.post("/", async function (req, res) {
  const body = req.body;
  const result = await postCleanup(body);
  console.log(`new cleanup created: ${result}`);
  res.status(200).json({ success: true, payload: result.rows });
});

export default router;
