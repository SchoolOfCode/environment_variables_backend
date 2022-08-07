import { query } from "../../connection.js";

let initialLogTable = [
  {
    clean_id: 1,
    user_id: 1,
    bags: 40,
    volunteers: 15,
  },
  {
    clean_id: 2,
    user_id: 1,
    bags: 32,
    volunteers: 8,
  },
  {
    clean_id: 3,
    user_id: 1,
    bags: 20,
    volunteers: 5,
  },
];

async function populateLogTable() {
  for (let i = 0; i < initialLogTable.length; i++) {
    const response = await query(
      `INSERT INTO log (clean_id, user_id, bags, volunteers) VALUES ($1, $2, $3, $4) RETURNING *;`,
      [
        initialLogTable[i].clean_id,
        initialLogTable[i].user_id,
        initialLogTable[i].bags,
        initialLogTable[i].volunteers,
      ]
    );

    console.log(response.rows);
  }
  console.log("Log clean Table populated succesfully");
}

populateLogTable();
