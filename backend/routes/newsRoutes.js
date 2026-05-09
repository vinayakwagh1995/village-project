import express from "express";

const router = express.Router();

let newsData = [];

router.get("/news", (req, res) => {
  res.json(newsData);
});

router.post("/news-add", (req, res) => {

  newsData.push(req.body);

  res.json({
    success: true,
    message: "News Added",
  });

});

export default router;