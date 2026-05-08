import db from "../db.js";

export const addGallery = (req, res) => {

  const { title, category } = req.body;

  if (!req.files || req.files.length === 0) {

    return res
      .status(400)
      .json({
        message: "No Images Uploaded",
      });

  }

  const imageNames = req.files.map(
    (file) => file.filename
  );

  const sql =
    "INSERT INTO gallery (title, category, images) VALUES (?, ?, ?)";

  db.query(
    sql,
    [
      title,
      category,
      JSON.stringify(imageNames),
    ],
    (err, result) => {

      if (err) {

        console.log(err);

        return res
          .status(500)
          .json(err);

      }

      res.json({
        message:
          "Gallery Added Successfully",
      });

    }
  );
};

export const getGallery = (req, res) => {

  const sql = "SELECT * FROM gallery";

  db.query(sql, (err, result) => {

    if (err) {

      return res
        .status(500)
        .json(err);

    }

    res.json(result);

  });
};