import News from "../models/News.js";

/* Get News */

export const getNews = async (req, res) => {
  try {
    const news = await News.find().sort({
      createdAt: -1,
    });

    res.json(news);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

/* Add News */

export const addNews = async (req, res) => {
  try {
    const news = new News(req.body);

    await news.save();

    res.json(news);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};