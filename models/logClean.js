import { query } from "../db/connection.js";

//Function to GET entire log a clean table
export async function getLogClean() {
  const data = await query(`SELECT * FROM log;`);
  console.log("This is the log table", data.rows);
  return data
}

//Get sum of a column (volunteers) from log clean table
export async function getAllVolunteers() {
  const data = await query(`SELECT SUM(volunteers) FROM log;`);
  console.log("This is the sum of volunteers in log table", data.rows);
  return data
}

//get sum of column (bags) from log clean table
export async function getAllBags() {
  const data = await query(`SELECT SUM(bags) FROM log;`);
  console.log("This is the sum of bags collected in log table", data.rows);
  return data
}

//Post
export async function postLogCleanup(body) {
  const {cleanname, bags, volunteers} = body;
  const data = await query(
    `INSERT INTO log (
      cleanname,
      bags,
      volunteers
    ) VALUES ($1, $2, $3) RETURNING *;`,
    [cleanname, bags, volunteers]
  );
  return (data)
}

//Update
export async function updateLogCleanup(id , data){
  const sqlString = `UPDATE log SET cleanname = $1 , bags = $2 ,volunteers =$3 WHERE id = $4 RETURNING *;`
  const result = await query(sqlString,[data.cleanname, data.bags, data.volunteers, id]); 
  return result
}

