import { query } from "../db/connection.js";

//Function to GET entire start a clean table
export async function getStartClean() {
  const data = await query(`SELECT * FROM start;`);
  console.log("This is the start table", data.rows);
  return data
}

//post 
export async function postCleanup(body) {
  const {cleanName, location, date, startTime, endTime, host, notes, latitude, longitude } = body;
  const data = await query(
    `INSERT INTO start (
      cleanName,
      location,
      date,
      startTime,
      endTime,
      host,
      notes,
      latitude,
      longitude
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;`,
    [cleanName, location, date, startTime, endTime, host, notes, latitude, longitude]
  );
  return (data)
}

