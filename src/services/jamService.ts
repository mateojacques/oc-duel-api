import pool from "../config/db";
import { ICreateJamBody } from "../interfaces/jam";
import { throwNoContentError } from "../utils/error";

export const findJamById = async (jamId: string) => {
  const result = await pool.query("SELECT * FROM jams WHERE id = $1", [jamId]);
  const jam = result.rows[0];
  if (!jam) throwNoContentError("A jam for the provided id does not exist.");
  return jam;
};

export const createNewJamInDB = async (body: ICreateJamBody) => {
  const { creator_id, title, description, topic_id, start_date, end_date } =
    body;

  const result = await pool.query(
    `
        INSERT INTO jams (id, creator_id, title, description, topic_id, start_date, end_date, created_at, updated_at)
        VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, NOW(), NOW())
        RETURNING *
        `,
    [creator_id, title, description, topic_id, start_date, end_date]
  );
  return result.rows[0];
};
