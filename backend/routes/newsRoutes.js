import express from "express";

import {
  addNews,
  getNews,
} from "../controllers/newsController.js";

const router = express.Router();

// Get All News
router.get("/", getNews);

// Add News
router.post("/add", addNews);

export default router;