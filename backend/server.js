import express from "express";
import cors from "cors";

import galleryRoutes from "./routes/galleryRoutes.js";
import newsRoutes from "./routes/newsRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", galleryRoutes);

app.use("/api", newsRoutes);

app.get("/", (req, res) => {

  res.send("API Running");

});

app.listen(5000, () => {

  console.log("Server running");

});