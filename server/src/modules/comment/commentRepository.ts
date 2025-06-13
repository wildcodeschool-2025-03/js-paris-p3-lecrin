import db_client from "../../../database/client";
import type { Result } from "../../../database/client";

interface Comment {
  id: number;
  text: string;
  date: string;
}

async function selectAll() {
  const [comments] = await db_client.query("SELECT * FROM comment");
  return comments;
}

async function selectOne(id: number) {
  const [comment] = await db_client.query(
    "SELECT * FROM comment WHERE id = ?",
    [id],
  );
  return comment;
}

async function create(newComment: Comment) {
  const [result] = await db_client.query(
    "INSERT INTO comment ? VALUES (?, ?) ",
    [newComment.text, newComment.date],
  );
  return result;
}
async function deleteById(id: number) {
  const [result] = await db_client.query<Result>(
    "DELETE FROM comment WHERE id = ?",
    [id],
  );
  return result;
}

async function updateById(comment: Partial<Comment>, id: number) {
  const [result] = await db_client.query("UPDATE artist SET ? WHERE id = ?", [
    comment,
    id,
  ]);
  return result;
}

export default { selectAll, selectOne, create, deleteById, updateById };
