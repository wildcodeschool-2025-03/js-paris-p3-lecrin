import db_client from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

interface Movement {
  id: number;
  name: string;
  photo: string;
  description: string;
}

async function selectAll() {
  const [movements] = await db_client.query("SELECT * FROM movement");
  return movements;
}

async function selectOne(id: number) {
  const [[movement]] = await db_client.query<Rows>(
    "SELECT * FROM movement WHERE id = ?",
    [id],
  );
  return movement;
}

async function create(newMovement: Omit<Movement, "id">) {
  const [result] = await db_client.query<Result>(
    "INSERT INTO movement (name, photo, description) VALUES (?, ?, ?)",
    [newMovement.name, newMovement.photo, newMovement.description],
  );
  return result;
}

async function deleteById(id: number) {
  const [result] = await db_client.query<Result>(
    "DELETE FROM movement WHERE id = ?",
    [id],
  );
  return result;
}

async function updateById(id: number, movement: Partial<Movement>) {
  const [result] = await db_client.query<Result>(
    "UPDATE movement SET ? WHERE id = ?",
    [movement, id],
  );
  return result;
}

export default { selectAll, selectOne, create, deleteById, updateById };
