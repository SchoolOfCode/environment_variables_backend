import { query } from "../../connection.js";

async function logClean() {
  const response = await query(
    `CREATE TABLE IF NOT EXISTS log (id SERIAL PRIMARY KEY, cleanname TEXT, bags INT, volunteers INT);`
  );

  console.log(response);
  console.log("Log clean table created succesfully");
}

logClean();

//comment
