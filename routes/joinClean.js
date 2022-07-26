import express from "express";
const router = express.Router();
import {getJoinClean, postJoinCleanup,updEvent,deleteById} from "../models/joinClean.js"


//Route to GET all entries in Log a clean table
router.get("/", async function (req, res) {
  const result = await getJoinClean()
  res.status(200).json({success:true, payload: result.rows});
});

//Post 
router.post("/", async function (req, res) {
  const body = req.body;
  const result = await postJoinCleanup(body)
  console.log(`new joiner posted: ${result}`)
  res.status(200).json({success:true, payload: result.rows});
});


//Put
router.put('/:id',async(req,res)=>{
  const id = Number(req.params.id);
  const data = req.body;
  const result = await updEvent(id, data)
  res.json({success: true, payload: result.rows });
});

//Delete
router.delete("/:id", async (req, res) => {
   const id = req.params.id
   const result = await deleteById(id)
   res.json({success: true, payload: result.rows })
  });

export default router;