import "reflect-metadata";
import app from "./app";
import mongoose from "mongoose";

mongoose.set("debug", true);
mongoose
  .connect("mongodb+srv://Dokjolly:AleVio03@offertelavoro.aegmrwj.mongodb.net/")
  .then((_) => {
    console.log("Connected to db");
    app.listen(3001, () => {
      console.log("Server listening on port 3000");
    });
  })
  .catch((err) => {
    console.error(err);
  });
