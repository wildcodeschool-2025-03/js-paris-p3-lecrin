import db_client from "../../../database/client";

async function selectAll() {
  const [result] = await db_client.query("SELECT * FROM user");
  return result;
}

export default { selectAll };
