import express, { Request, Response } from "express";
import pool from "./config/db";
import routes from "./routes";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use("/api", routes);

pool
  .connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}. DB is ready.`);
    });
  })
  .catch((err) => {
    console.error("Error while connecting to DB");
    process.exit(1);
  });
