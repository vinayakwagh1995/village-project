import express from "express";
import cors from "cors";

import newsRoutes from "./routes/newsRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

/* Upload Folder Access */

app.use(
  "/uploads",
  express.static("uploads")
);

/* Routes */

app.use("/api/news", newsRoutes);

app.use("/api/gallery", galleryRoutes);

app.listen(5000, () => {

  console.log("Server Running");

});