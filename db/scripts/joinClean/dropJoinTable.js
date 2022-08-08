import { query } from "../../connection.js";

async function dropJoinTable() {
  await query(`DROP TABLE IF EXISTS joinClean;`);

  console.log("Join clean table dropped succesfully");
}

dropJoinTable();
