import db_client from "../../../database/client";
import type { Result } from "../../../database/client";

type UserLikeArtwork = {
  user_id: number;
  artwork_id: number;
};

async function create(like: UserLikeArtwork) {
  const [result] = await db_client.query(
    "INSERT INTO user_liked_artwork (user_id, artwork_id) VALUES (?, ?)",
    [like.user_id, like.artwork_id],
  );
  return result;
}

async function selectOne(id: number) {
  const [result] = await db_client.query(
    "SELECT user_id FROM user_liked_artwork where artwork_id = ?",
    [id],
  );
  return result;
}

async function deleteById(artworkId: number, userId: number) {
  const [result] = await db_client.query<Result>(
    "DELETE FROM user_liked_artwork WHERE (user_id, artwork_id) = (?, ?)",
    [userId, artworkId],
  );
  return result;
}
async function selectAllByUser(userId: number) {
  const [rows] = await db_client.query(
    `SELECT a.* FROM user_liked_artwork ula
     JOIN artwork a ON a.id = ula.artwork_id
     WHERE ula.user_id = ?`,
    [userId],
  );
  return rows;
}

export default { create, selectOne, deleteById, selectAllByUser };
