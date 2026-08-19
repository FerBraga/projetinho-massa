import database from "infra/database.js";

export default async function (req, res) {
  //versão do postgress
  const version = await database.query("SHOW server_version");

  const databaseName = process.env.DATABASE_NAME || "postgres";

  //conexões máximas do postgress
  const maxConnections = await database.query(
    "SELECT setting FROM pg_settings WHERE name = 'max_connections'",
  );
  //conexões usadas do postgress
  const openConnections = await database.query({
    text: `SELECT * FROM pg_stat_activity WHERE datname = $1`,
    values: [databaseName],
  });

  const updatedAt = new Date().toISOString();

  res.status(200).json({
    updated_at: updatedAt,
    version: version.rows[0].server_version,
    max_connections: parseInt(maxConnections.rows[0].setting),
    open_connections: parseInt(openConnections.rowCount),
  });
}
