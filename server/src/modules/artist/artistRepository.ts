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
    "SELECT artist.id, JSON_ARRAYAGG(JSON_OBJECT('id', m.id,'name', m.name)) AS movements, artist.name as artistName, artist.photo, artist.birthday, artist.death_date, count(artwork.id) AS artworkCount FROM artist JOIN artwork on artwork.artist_id=artist.id JOIN link_artist_movement ON artist.id = link_artist_movement.artist_id JOIN movement m ON link_artist_movement.movement_id = m.id GROUP BY artist.id",
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
