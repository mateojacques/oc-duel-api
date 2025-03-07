import dotenv from "dotenv";

dotenv.config();

const {
  PORT,
  DB_NAME,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  JWT_EXPIRES_IN,
  JWT_SECRET,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
  AWS_REGION_NAME,
  S3_BUCKET_NAME,
  NODE_ENV,
} = process.env;

const config = {
  PORT: Number(PORT) || 8000,
  JWT_EXPIRES_IN: Number(JWT_EXPIRES_IN) || 3600000,
  JWT_SECRET: (JWT_SECRET as string) || "default",
  DB_NAME: DB_NAME as string,
  DB_HOST: DB_HOST as string,
  DB_PORT: DB_PORT as string,
  DB_USER: DB_USER as string,
  DB_PASSWORD: DB_PASSWORD as string,
  AWS_ACCESS_KEY_ID: AWS_ACCESS_KEY_ID as string,
  AWS_SECRET_ACCESS_KEY: AWS_SECRET_ACCESS_KEY as string,
  AWS_REGION: AWS_REGION as string,
  AWS_REGION_NAME: AWS_REGION_NAME as string,
  S3_BUCKET_NAME: S3_BUCKET_NAME as string,
  NODE_ENV: (NODE_ENV as string) || "development",
};

export default config;
