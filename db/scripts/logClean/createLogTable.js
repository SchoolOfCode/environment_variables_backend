import { query } from "../../connection.js";

async function logClean() {
  const response = await query(
    `CREATE TABLE IF NOT EXISTS log (id SERIAL PRIMARY KEY, clean_id INT,user_id INT, bags INT, volunteers INT);`
  );

  console.log(response);
  console.log("Log clean table created succesfully");
}

logClean();
