import db_client from "../../../database/client";

async function selectAll() {
  const [result] = await db_client.query("SELECT * FROM collection");
  return result;
}

export default { selectAll };
