import db_client from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

interface Artwork {
  name: string;
  user_id: number;
  date_artwork: string;
  photo: string;
  place: string;
  description: string;
  artist_id: number;
  movement_id: number;
}

async function selectAll() {
  const [artworks] = await db_client.query<Rows>("SELECT * FROM artwork");
  return artworks;
}

async function selectOne(id: number) {
  const [[artwork]] = await db_client.query<Rows>(
    "SELECT * FROM artwork WHERE id = ?",
    [id],
  );
  return artwork;
}

async function create(newArtwork: Artwork) {
  const [result] = await db_client.query<Result>(
    "INSERT INTO artwork (name, user_id, date_artwork, photo, place, description, artist_id, movement_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [
      newArtwork.name,
      newArtwork.user_id,
      newArtwork.date_artwork,
      newArtwork.photo,
      newArtwork.place,
      newArtwork.description,
      newArtwork.artist_id,
      newArtwork.movement_id,
    ],
  );
  return result;
}

async function deleteById(id: number) {
  const [result] = await db_client.query<Result>(
    "DELETE FROM artwork WHERE id = ?",
    [id],
  );
  return result;
}

async function updateById(id: number, artwork: Artwork) {
  const [result] = await db_client.query<Result>(
    "UPDATE artwork SET ? WHERE id = ?",
    [artwork, id],
  );
  return result;
}

export default { selectAll, selectOne, create, deleteById, updateById };
