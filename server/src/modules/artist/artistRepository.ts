import db_client from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

interface Artist {
  id: number;
  name: string;
  description: string;
  death_date: string;
  birthday: string;
}

async function selectAll() {
  const [artists] = await db_client.query<Rows>(
    `SELECT 
        artist.id, 
        artist.name AS artistName, 
        artist.photo, 
        artist.birthday, 
        artist.death_date, 
        (SELECT COUNT(*) FROM artwork WHERE artwork.artist_id = artist.id) AS artworkCount,
        (
          SELECT JSON_ARRAYAGG(JSON_OBJECT('id', m.id, 'name', m.name))
          FROM link_artist_movement lam
          JOIN movement m ON lam.movement_id = m.id
          WHERE lam.artist_id = artist.id
        ) AS movements
     FROM artist`,
  );
  return artists;
}

async function selectOne(id: number) {
  const [[artist]] = await db_client.query<Rows>(
    "SELECT * FROM artist WHERE id = ?",
    [id],
  );
  return artist;
}

async function create(newArtist: Omit<Artist, "id">) {
  const [result] = await db_client.query<Result>(
    "INSERT INTO artist ? VALUES (?, ?, ?, ?) ",
    [
      newArtist.name,
      newArtist.description,
      newArtist.death_date,
      newArtist.birthday,
    ],
  );
  return result;
}

async function deleteById(id: number) {
  const [result] = await db_client.query<Result>(
    "DELETE FROM artist WHERE id = ?",
    [id],
  );
  return result;
}

async function updateById(artist: Partial<Artist>, id: number) {
  const [result] = await db_client.query<Result>(
    "UPDATE artist SET ? WHERE id = ?",
    [artist, id],
  );
  return result;
}

export default { selectAll, selectOne, create, deleteById, updateById };
