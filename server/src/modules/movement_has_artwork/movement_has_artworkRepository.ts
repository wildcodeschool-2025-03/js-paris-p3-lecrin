import db_client from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

interface Movement_has_artwork {
  movement_id: number;
  artwork_id: number;
}

async function selectAll() {
  const [rows] = await db_client.query<Rows>(
    "SELECT * FROM movement_has_artwork ",
  );
  return rows;
}

async function selectOne(id: number) {
  const [[rows]] = await db_client.query<Rows>(
    "SELECT * FROM movement_has_artwork WHERE id = ?",
    [id],
  );
  return rows;
}

export default {
  selectAll,
  selectOne,
};
