import db_client from "../../../database/client";

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
    "SELECT artwork_id, count(user_id) as countLike FROM user_liked_artwork where artwork_id = ? GROUP BY artwork_id",
    [id],
  );
  return result;
}

export default { create, selectOne };
