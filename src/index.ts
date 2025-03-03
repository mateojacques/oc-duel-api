import express, { Request, Response } from "express";
import pool from "./config/db";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Node.js + TypeScript API!");
});

pool.connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}. DB is ready.`);
  });
}).catch((err) => {
  console.error("Error while connecting to DB");
  process.exit(1);
});
