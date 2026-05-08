import express from "express";

import upload from "../multer.js";

import {
  addGallery,
  getGallery,
} from "../controllers/galleryController.js";

const router = express.Router();

/* Add Gallery */

router.post(
  "/add",
  upload.array("images", 20),
  addGallery
);

/* Get Gallery */

router.get("/", getGallery);

export default router;