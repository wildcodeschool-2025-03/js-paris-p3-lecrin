import db_client from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

export type User = {
  id: number;
  name: string;
  birthday: string;
  date_inscription: string;
  mail: string;
  password: string;
  admin: string;
  artist_id: string;
  photo?: string;
};

async function selectAll() {
  const [users] = await db_client.query<Rows>("SELECT * FROM user");
  return users;
}

async function selectOne(id: number) {
  const [[user]] = await db_client.query<Rows>(
    "SELECT * FROM user WHERE id = ? ",
    [id],
  );
  return user;
}

async function add(newUser: Omit<User, "id">) {
  const [result] = await db_client.query<Result>(
    "INSERT INTO user (name, birthday, mail, password, artist_id, photo) values (?, ?, ?, ?, ?, ?)",
    [
      newUser.name,
      newUser.birthday,
      newUser.mail,
      newUser.password,
      newUser.artist_id,
      newUser.photo ?? "default.jpg",
    ],
  );
  return result.affectedRows;
}

async function readByEmail(mail: string) {
  const [rows] = await db_client.query<Rows>(
    "Select * from user where mail = ?",
    [mail],
  );
  return rows[0] as User;
}

async function deleteById(id: number) {
  const [result] = await db_client.query<Result>(
    "DELETE FROM user WHERE id = ?",
    [id],
  );
  return result;
}

async function updateById(user: Partial<User>, id: number) {
  const [result] = await db_client.query<Result>(
    "UPDATE user SET ? WHERE id = ?",
    [user, id],
  );
  return result;
}

export default {
  selectAll,
  selectOne,
  add,
  readByEmail,
  deleteById,
  updateById,
};
