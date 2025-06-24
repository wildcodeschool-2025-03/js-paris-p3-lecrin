import db_client from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

interface Collection {
  id: number;
  name: string;
  user_id: number;
}

async function selectAll() {
  const [result] = await db_client.query("SELECT * FROM collection");
  return result;
}
async function selectOne(id: number) {
  const [[collection]] = await db_client.query<Rows>(
    "SELECT * FROM collection WHERE id = ?",
    [id],
  );
  return collection;
}

async function create(newCollection: Omit<Collection, "id">) {
  const [result] = await db_client.query<Result>(
    "INSERT INTO collection (name, user_id) VALUES (?, ?)",
    [newCollection.name, newCollection.user_id],
  );
  return result;
}

async function deleteById(id: number) {
  const [result] = await db_client.query<Result>(
    "DELETE FROM collection WHERE id = ?",
    [id],
  );
  return result;
}

async function updateById(id: number, collection: Partial<Collection>) {
  const [result] = await db_client.query<Result>(
    "UPDATE collection SET ? WHERE id = ?",
    [collection, id],
  );
  return result;
}

export default { selectAll, selectOne, create, deleteById, updateById };
