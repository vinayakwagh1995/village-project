import express from "express";
import News from "../models/News.js";
import upload from "../middleware/upload.js";

const router = express.Router();

/* GET NEWS */

router.get("/news", async (req, res) => {

  try {

    const news =
      await News.find().sort({
        createdAt: -1,
      });

    res.json(news);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

});

/* ADD NEWS */

router.post(
  "/news-add",
  upload.single("image"),
  async (req, res) => {

    try {

      const newNews = new News({

        title: req.body.title,

        description:
          req.body.description,

        image: req.file
          ? req.file.filename
          : "",

      });

      await newNews.save();

      res.json({
        success: true,
        message: "News Added",
      });

    } catch (error) {

      res.status(500).json({
        error: error.message,
      });

    }

  }
);

export default router;