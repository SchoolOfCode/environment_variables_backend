import { query } from "../db/connection.js";

//Function to GET entire start a clean table
export async function getStartClean() {
  const data = await query(`SELECT * FROM start;`);
  console.log("This is the start table", data.rows);
  return data
}

