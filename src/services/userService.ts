import pool from "../config/db";
import { ICreateUserBody } from "../interfaces/user";
import { throwNoContentError } from "../utils/error";
import { hashPassword } from "../utils/hash";

export const findUserById = async (userId: string) => {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [
    userId,
  ]);
  const user = result.rows[0];
  if (!user) throwNoContentError("An user for the provided id does not exist.");
  return user;
};

export const createNewUserInDB = async (values: ICreateUserBody) => {
  const {
    name,
    email,
    username,
    password,
    avatar_url = null,
    cover_url = null,
    twitter_url = null,
    deviantart_url = null,
    instagram_url = null,
    personal_website_url = null,
  } = values;

  const hashedPassword = await hashPassword(password);

  const result = await pool.query(
    `
    INSERT INTO users (id, name, email, username, password, avatar_url, cover_url, twitter_url, deviantart_url, instagram_url, personal_website_url, created_at, updated_at)
    VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW(), NOW())
    RETURNING *
    `,
    [
      name,
      email,
      username,
      hashedPassword,
      avatar_url,
      cover_url,
      twitter_url,
      deviantart_url,
      instagram_url,
      personal_website_url,
    ]
  );
  const createdUser = result.rows[0];
  return createdUser;
};
