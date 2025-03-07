import { Pool } from "pg";
import config from "./config";

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, NODE_ENV } = config;

const pool = new Pool({
  connectionString: `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  ssl:
    NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

export default pool;
