import db_client from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type Users = {
  id: number;
  name: string;
  birthday: string;
  date_inscription: string;
  mail: string;
  password: string;
  admin: string;
  artist_id: string;
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

async function add(newUser: Omit<Users, "id">) {
  const [result] = await db_client.query<Result>(
    "INSERT INTO user (name, birthday, date_inscription, mail, password, artist_id) values (?, ?, ?, ?, ?, ?)",
    [
      newUser.name,
      newUser.birthday,
      newUser.date_inscription,
      newUser.mail,
      newUser.password,
      newUser.artist_id,
    ],
  );
  return result.affectedRows;
}

async function readByEmail(mail: string) {
  const [rows] = await db_client.query<Rows>(
    "Select * from user where mail = ?",
    [mail],
  );
  return rows[0] as Users;
}

async function deleteById(id: number) {
  const [result] = await db_client.query<Result>(
    "DELETE FROM user WHERE id = ?",
    [id],
  );
  return result;
}

async function updateById(user: Partial<Users>, id: number) {
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
