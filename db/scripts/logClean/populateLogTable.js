import { query } from "../../connection.js";

let initialLogTable = [
  {
    cleanname: "London Clean",
    bags: 40,
    volunteers: 15,
  },
  {
    cleanname: "Brighton Cleanup",
    bags: 36,
    volunteers: 12,
  },
  {
    cleanname: "River Adur Cleanup",
    bags: 16,
    volunteers: 8,
  },
  {
    cleanname: "O2 Cleanup",
    bags: 100,
    volunteers: 25,
  },
];

async function populateLogTable() {
  for (let i = 0; i < initialLogTable.length; i++) {
    const response = await query(
      `INSERT INTO log (cleanname, bags, volunteers) VALUES ($1, $2, $3) RETURNING *;`,
      [
        initialLogTable[i].cleanname,
        initialLogTable[i].bags,
        initialLogTable[i].volunteers,
      ]
    );

    console.log(response.rows);
  }
  console.log("Log clean Table populated succesfully");
}

populateLogTable();
