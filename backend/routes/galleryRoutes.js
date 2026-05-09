import express from "express";

const router = express.Router();

/* Temporary Data */

let galleryData = [];

/* GET */

router.get("/gallery", (req, res) => {

  res.json(galleryData);

});

/* POST */

router.post("/gallery-add", (req, res) => {

  const newGallery = {
    title: req.body.title,
    photos: req.body.photos || [],
  };

  galleryData.push(newGallery);

  res.json({
    success: true,
    message: "Gallery Added",
  });

});

export default router;