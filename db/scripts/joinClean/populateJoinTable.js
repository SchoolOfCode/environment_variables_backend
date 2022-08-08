import { query } from "../../connection.js";

let initialJoinTable = [
  {
    name: "Blake Lawrence",
    comments: "bringing my guide dog",
  },
];

async function populateJoinTable() {
  for (let i = 0; i < initialJoinTable.length; i++) {
    const response = await query(
      `INSERT INTO joinClean (name, comments) VALUES ($1, $2) RETURNING *;`,
      [initialJoinTable[i].name, initialJoinTable[i].comments]
    );

    console.log(response.rows);
  }
  console.log("Join clean Table populated succesfully");
}

populateJoinTable();
