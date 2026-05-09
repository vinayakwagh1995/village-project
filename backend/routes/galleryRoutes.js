import express from "express";

import Gallery from "../models/Gallery.js";

import upload from "../middleware/upload.js";

const router = express.Router();

/* GET GALLERY */

router.get(
  "/gallery",

  async (req, res) => {

    try {

      const gallery =
        await Gallery.find();

      res.json(gallery);

    } catch (error) {

      console.log(error);

      res.status(500).json({
        error: error.message,
      });

    }

  }
);

/* ADD GALLERY */

router.post(

  "/gallery-add",

  upload.array("photos", 20),

  async (req, res) => {

    try {

      console.log(req.body);

      console.log(req.files);

      const photos =
        req.files?.map(
          (file) => file.filename
        ) || [];

      const newGallery =
        new Gallery({

          title:
            req.body.title,

          photos,

        });

      await newGallery.save();

      res.json({
        success: true,
        message:
          "Gallery Added",
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        error: error.message,
      });

    }

  }
);

export default router;