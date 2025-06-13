import db_client from "../../../database/client";
import type { Result } from "../../../database/client";

type Users = {
  id: number;
  name: string;
  birthday: string;
  date_inscription: string;
  mail: string;
  password: string;
  admin: string;
  artist_id: string;
}

class UserRepository {
  async selectAll() {
  const [user] = await db_client.query("SELECT * FROM user");
  return user;
}

  async create (user: Omit< Users,"id">){
    const [result] = await db_client.query<Result>(
      "INSERT INTO user (name, birthday, date_inscription, mail, password, admin, artist_id) values (?, ?, ?, ?, ?, ?)",
      [ user.name, user.birthday, user.mail, user.password, user.admin, user.artist_id,],
    );
    return result.insertId;
  }

  async selectOne (id: number){
    const [user] = await db_client.query<Result>("SELECT * FROM user WHERE id = ? ", [id]);
    return user;
  }

  async deleteByID (id: number){
    const [result] = await db_client.query<Result>("DELETE FROM user WHERE id = ?", [id]);
    return result;
  }

  async updateByID (user: Partial <Users>, id: number) {
    const [result] = await db_client.query<Result>("UPDATE user SET ? WHERE id = ?", [user, id]);
    return result;
  }

}


export default new UserRepository;







