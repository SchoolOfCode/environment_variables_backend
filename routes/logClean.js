import express from "express";
const router = express.Router();
import {getLogClean, postLogCleanup, getAllVolunteers, getAllBags} from "../models/logClean.js"


//Route to GET all entries in Log a clean table
router.get("/", async function (req, res) {
  const result = await getLogClean()
  res.status(200).json({success:true, payload: result.rows});
});

//Get sum of volunteers from log clean table
router.get("/volunteers", async function (req, res) {
    const result = await getAllVolunteers()
    res.status(200).json({success:true, payload: result.rows});
  });
  
//Get sum of volunteers from log clean table
  router.get("/bagscollected", async function (req, res) {
      const result = await getAllBags()
      res.status(200).json({success:true, payload: result.rows});
    });
  
//Post 
router.post("/", async function (req, res) {
  const body = req.body;
  const result = await postLogCleanup(body)
  console.log(`new log created: ${result}`)
  res.status(200).json({success:true, payload: result.rows});
});

export default router;