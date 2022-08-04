import { query } from "../../connection.js";

async function dropStartTable() {
  await query(`DROP TABLE IF EXISTS start;`);

  console.log("Start clean table dropped succesfully");
}

dropStartTable();
