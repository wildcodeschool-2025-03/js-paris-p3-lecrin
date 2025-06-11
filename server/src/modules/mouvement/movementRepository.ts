import db_client from "../../../database/client";

async function selectAll() {
  const [result] = await db_client.query("SELECT * FROM movement");
  return result;
}

export default { selectAll };
