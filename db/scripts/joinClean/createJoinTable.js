import { query } from "../../connection.js";

async function joinClean() {
  const response = await query(
    `CREATE TABLE IF NOT EXISTS joinClean (id SERIAL PRIMARY KEY, name TEXT, comments TEXT);`
  );

  console.log(response);
  console.log("Join clean table created succesfully");
}

joinClean();
