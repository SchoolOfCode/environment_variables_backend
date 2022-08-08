import { query } from "../../connection.js";

async function dropLogTable() {
  await query(`DROP TABLE IF EXISTS log;`);

  console.log("Log clean table dropped succesfully");
}

dropLogTable();
