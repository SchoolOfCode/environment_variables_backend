import { query } from "../db/connection.js";

//Function to GET entire Join a clean table
export async function getJoinClean() {
  const data = await query(`SELECT * FROM joinClean;`);
  console.log("This is the join clean table", data.rows);
  return data
}


//Post
export async function postJoinCleanup(body) {
  const {name, comments} = body;
  const data = await query(
    `INSERT INTO joinClean (
      name,
      comments
    ) VALUES ($1, $2 ) RETURNING *;`,
    [name, comments]
  );
  return (data)
}