router.post(
  "/gallery-add",
  upload.array("photos", 20),

  async (req, res) => {

    try {

      const {
        title
      } = req.body;

      const photoNames =
        req.files.map(
          (file) =>
            file.filename
        );

      /* FIND EXISTING SECTION */

      let existingGallery =
        await Gallery.findOne({
          title,
        });

      /* IF EXISTS → ADD PHOTOS */

      if (existingGallery) {

        existingGallery.photos.push(
          ...photoNames
        );

        await existingGallery.save();

        return res.json({
          success: true,
          message:
            "Photos Added",
        });

      }

      /* CREATE NEW */

      const newGallery =
        new Gallery({

          title,

          photos: photoNames,

        });

      await newGallery.save();

      res.json({
        success: true,
        message:
          "Gallery Created",
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
        error:
          error.message,
      });

    }

  }
);