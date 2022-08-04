import express from "express";
const router = express.Router();
import {getStartClean} from "../models/startClean.js"


//Route to GET all entries in start a clean table
router.get("/", async function (req, res) {
  const result = await getStartClean()
  res.status(200).json({success:true, payload: result.rows});
});

export default router;
