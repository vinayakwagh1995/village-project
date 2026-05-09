import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import newsRoutes from "./routes/newsRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";

dotenv.config();

const app = express();

/* Middleware */

app.use(cors());

app.use(express.json());

app.use(
  "/uploads",
  express.static("uploads")
);

/* MongoDB */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

/* Routes */

app.use("/api", newsRoutes);

app.use("/api", galleryRoutes);

/* Home */

app.get("/", (req, res) => {
  res.send("API Running");
});

/* Port */

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on ${PORT}`
  );
});