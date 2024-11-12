// require('dotenv').config({path : './env'})  not to use is we are using type as module in package.json

import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

/*
import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
    app.on("error", (error) => {
      console.log("error:", error);
      throw error;
    });

    app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on ${process.env.PORT}`)
    })
  } catch (error) {
    console.log("ERROR", error);
    throw error;
  }
})();
*/