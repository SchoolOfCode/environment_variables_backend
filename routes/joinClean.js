import express from "express";
const router = express.Router();
import {
  getJoinClean,
  postJoinCleanup,
  updEvent,
} from "../models/joinClean.js";

//Route to GET all entries in Log a clean table
router.get("/", async function (req, res) {
  const result = await getJoinClean();
  res.status(200).json({ success: true, payload: result.rows });
});

//Post
router.post("/", async function (req, res) {
  const body = req.body;
  const result = await postJoinCleanup(body);
  // console.log(`new joiner posted: ${result}`);
  res.status(200).json({ success: true, payload: result.rows });
});

//PUT
router.put("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const data = req.body;
  console.log(id, data);
  const result = await updEvent(id, data);
  res.json({ success: true, payload: result.rows });
});

export default router;
