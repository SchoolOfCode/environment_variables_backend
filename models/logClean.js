import { query } from "../db/connection.js";

//Function to GET entire log a clean table
export async function getLogClean() {
  const data = await query(`SELECT * FROM log;`);
  console.log("This is the log table", data.rows);
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

