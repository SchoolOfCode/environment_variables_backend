import { query } from "../db/connection.js";

//Function to GET entire Join a clean table
export async function getJoinClean() {
  const data = await query(`SELECT * FROM joinClean;`);
  console.log("This is the join clean table", data.rows);
  return data;
}

//Post
export async function postJoinCleanup(body) {
  const { name, comments } = body;
  const data = await query(
    `INSERT INTO joinClean (
      name,
      comments
    ) VALUES ($1, $2 ) RETURNING *;`,
    [name, comments]
  );
  return data;
}

//PUT
export async function updEvent(id, data) {
  const sqlString = `UPDATE joinClean SET name = $1 , comments = $2 WHERE id = $3 RETURNING *;`;
  const result = await query(sqlString, [data.name, data.comments, id]);
  return result;
}

//Delete
export async function deleteById(id) {
  const sqlString = `DELETE FROM joinclean WHERE id=$1 RETURNING *;`;
  const result = await query(sqlString, [id]);
  return result;
}

//adding a random comment
