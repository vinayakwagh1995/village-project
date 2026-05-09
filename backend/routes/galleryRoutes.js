import express from "express";

const router = express.Router();

let galleryData = [];

router.get("/gallery", (req, res) => {
  res.json(galleryData);
});

router.post("/gallery-add", (req, res) => {

  galleryData.push(req.body);

  res.json({
    success: true,
    message: "Gallery Added",
  });

});

export default router;