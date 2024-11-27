import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { appDataSource } from "./config/typeorm.config";

export async function runApp() {
  const app = express();
  const port = process.env.PORT || 8090;

  try {
    await appDataSource.initialize();

    app.listen(port, () => {
      console.log(`Running on: http://localhost:${port}`);
    });
  } catch (err) {
    console.error("DB_ERROR: Could not connect to database. ", err);
  }
}
