import express from "express";

const router = express.Router();

/* Temporary Data */

let newsData = [];

/* GET */

router.get("/news", (req, res) => {

  res.json(newsData);

});

/* POST */

router.post("/news-add", (req, res) => {

  newsData.push(req.body);

  res.json({
    success: true,
    message: "News Added",
  });

});

export default router;