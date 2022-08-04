import express from "express";
import { Connection } from "pg";
const router = express.Router();
import {startClean} from "../models/startClean.js"

/* GET users listing. */

router.get("/", async function (req, res) {
  const result = await startClean()
  res.status(200).json({success:true, payload: result.rows});
});

export default router;
