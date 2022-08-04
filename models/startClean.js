import { query } from "../db/connection.js";


export async function getStartTable() {
  const data = await query(`SELECT * FROM start;`);
  console.log("This is the start table", data);
  return data
}

