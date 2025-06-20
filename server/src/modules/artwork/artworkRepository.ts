import db_client from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

interface Artwork {
  id: number;
  name: string;
  user_id: number;
  date_artwork: string;
  photo: string;
  musee: string;
  ville: string;
  pays: string;
  description: string;
  artist_id: number;
  movement_id: number;
}

async function selectAll() {
  const [artworks] = await db_client.query<Rows>(
    "SELECT artwork.id, JSON_ARRAYAGG(JSON_OBJECT('id', m.id,'name', m.name)) AS movements, user.name AS userName, artwork.name as artworkName, artwork.photo, artwork.date_artwork, artwork.musee, artwork.ville, artwork.pays, artwork.date_post, artwork.description, artist.name AS artistName FROM artwork JOIN artist ON artwork.artist_id = artist.id JOIN user ON artwork.user_id = user.id JOIN movement_has_artwork ON artwork.id = movement_has_artwork.artwork_id JOIN movement m ON movement_has_artwork.movement_id = m.id GROUP BY artwork.id",
  );
  return artworks;
}

async function selectOne(id: number) {
  const [[artwork]] = await db_client.query<Rows>(
    "SELECT artwork.id, user.name AS userName, artwork.name as artworkName, artwork.photo, artwork.date_artwork, artwork.musee, artwork.ville, artwork.pays, artwork.date_post, artwork.description, artist.name AS artistName FROM artwork JOIN artist ON artwork.artist_id = artist.id JOIN user ON artwork.user_id = user.id WHERE artwork.id = ?",
    [id],
  );
  return artwork;
}

async function create(newArtwork: Omit<Artwork, "id">) {
  const [result] = await db_client.query<Result>(
    "INSERT INTO artwork (name, user_id, date_artwork, photo, place, description, artist_id, movement_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [
      newArtwork.name,
      newArtwork.user_id,
      newArtwork.date_artwork,
      newArtwork.photo,
      newArtwork.musee,
      newArtwork.ville,
      newArtwork.pays,
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

async function updateById(id: number, artwork: Partial<Artwork>) {
  const [result] = await db_client.query<Result>(
    "UPDATE artwork SET ? WHERE id = ?",
    [artwork, id],
  );
  return result;
}

export default { selectAll, selectOne, create, deleteById, updateById };
