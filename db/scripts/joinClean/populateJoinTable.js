import { query } from "../../connection.js";

let initialJoinTable = [
  {
    name: "Blake Lawrence",
    email: "blake-lawrence@hotmail.co.uk",
  },
];

async function populateJoinTable() {
  for (let i = 0; i < initialJoinTable.length; i++) {
    const response = await query(
      `INSERT INTO joinClean (name, email) VALUES ($1, $2) RETURNING *;`,
      [initialJoinTable[i].name, initialJoinTable[i].email]
    );

    console.log(response.rows);
  }
  console.log("Join clean Table populated succesfully");
}

populateJoinTable();
