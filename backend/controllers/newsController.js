import db from "../db.js";

export const addNews = (req, res) => {

  const {
    title,
    category,
    description,
    date,
  } = req.body;

  const sql =
    "INSERT INTO news (title, category, description, date) VALUES (?, ?, ?, ?)";

  db.query(
    sql,
    [title, category, description, date],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "News Added",
      });

    }
  );
};

export const getNews = (req, res) => {

  const sql =
    "SELECT * FROM news ORDER BY id DESC";

  db.query(sql, (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);

  });
};