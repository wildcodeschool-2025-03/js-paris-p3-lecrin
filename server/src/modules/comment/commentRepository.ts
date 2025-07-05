import db_client from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

interface Comment {
  id: number;
  text: string;
  date: string;
  user_id: number;
  artwork_id: number;
}

async function selectAll() {
  const [comments] = await db_client.query<Rows>("SELECT * FROM comment");
  return comments;
}

async function selectOne(id: number) {
  const [[comment]] = await db_client.query<Rows>(
    "SELECT * FROM comment WHERE id = ?",
    [id],
  );
  return comment;
}

async function create(newComment: Omit<Comment, "id">) {
  const [result] = await db_client.query<Result>(
    "INSERT INTO comment (text, date, user_id, artwork_id) VALUES (?, ?, ?, ?)",
    [
      newComment.text,
      newComment.date,
      newComment.user_id,
      newComment.artwork_id,
    ],
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
  const [result] = await db_client.query<Result>(
    "UPDATE artist SET ? WHERE id = ?",
    [comment, id],
  );
  return result;
}

async function selectCommentByArtworkId(artworkId: number) {
  const [comment] = await db_client.query<Rows>(
    "SELECT comment.text, comment.date, user.name AS userName, user.photo AS userPic FROM comment JOIN user ON comment.user_id = user.id WHERE comment.artwork_id = ?",
    [artworkId],
  );
  return comment;
}

export default {
  selectAll,
  selectOne,
  create,
  deleteById,
  updateById,
  selectCommentByArtworkId,
};
