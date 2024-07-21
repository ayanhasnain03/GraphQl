import mongoose from "mongoose";

export const connectDB = (uri: string) =>
  mongoose
    .connect(uri, {
      dbName: "graphql",
    })
    .then((c) => console.log("db connected"))
    .catch((err) => console.log(err));
