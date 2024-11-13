// require('dotenv').config({path : './env'})  not to use is we are using type as module in package.json

import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server Is Runnig at ${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.log("Error !!!", error);
      throw error;
    });
  })
  .catch((error) => {
    console.log("Failed to connect the DB", error);
  });

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
