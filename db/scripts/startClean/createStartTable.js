import { query } from "../../connection.js";

async function startClean() {
  const response = await query(
    `CREATE TABLE IF NOT EXISTS start (id SERIAL PRIMARY KEY, cleanName TEXT,location TEXT, date TEXT, startTime TEXT, endTime TEXT, host TEXT, notes TEXT, latitude DECIMAL, longitude DECIMAL);`
  );

  console.log(response);
  console.log("start clean table created succesfully");
}

startClean();
