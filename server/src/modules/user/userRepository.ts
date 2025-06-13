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

async function create(newUser: Omit<Users, "id">) {
  const [result] = await db_client.query<Result>(
    "INSERT INTO user (name, birthday, date_inscription, mail, password, admin, artist_id) values (?, ?, ?, ?, ?, ?)",
    [
      newUser.name,
      newUser.birthday,
      newUser.mail,
      newUser.password,
      newUser.admin,
      newUser.artist_id,
    ],
  );
  return result;
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

export default { selectAll, selectOne, create, deleteById, updateById };
