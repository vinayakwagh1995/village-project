import { useEffect, useState } from "react";
import axios from "axios";

function Gallery() {

  const [galleryData, setGalleryData] =
    useState([]);

  const [selectedGallery, setSelectedGallery] =
    useState(null);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  /* API */

  const API =
    "https://village-project-z9kk.onrender.com";

  /* Fetch Gallery */

  useEffect(() => {

    fetchGallery();

  }, []);

  const fetchGallery = async () => {

    try {

      const res =
        await axios.get(
          `${API}/api/gallery`
        );

      /* Remove Invalid Data */

      const validData =
        res.data.filter(
          (item) =>

            item &&
            item.title &&
            Array.isArray(
              item.photos
            ) &&
            item.photos.length > 0

        );

      setGalleryData(validData);

    } catch (error) {

      console.log(error);

    }

  };

  /* Open Gallery */

  const openGallery = (
    gallery
  ) => {

    if (
      !gallery?.photos?.length
    )
      return;

    setSelectedGallery(
      gallery
    );

    setCurrentIndex(0);

  };

  /* Close Gallery */

  const closeGallery = () => {

    setSelectedGallery(null);

  };

  /* Next Image */

  const nextImage = () => {

    if (
      !selectedGallery
        ?.photos?.length
    )
      return;

    setCurrentIndex((prev) =>

      prev ===
      selectedGallery
        .photos.length - 1

        ? 0

        : prev + 1

    );

  };

  /* Previous Image */

  const prevImage = () => {

    if (
      !selectedGallery
        ?.photos?.length
    )
      return;

    setCurrentIndex((prev) =>

      prev === 0

        ? selectedGallery
            .photos.length - 1

        : prev - 1

    );

  };

  return (

    <section
      id="gallery"
      className="py-5"
    >

      <div className="container">

        {/* Heading */}

        <div className="text-center mb-5">

          <h2 className="page-title">

            <i className="fas fa-images me-2"></i>

            फोटो गॅलरी

          </h2>

          <p className="text-muted">

            गावातील सुंदर क्षण
            आणि आठवणी

          </p>

        </div>

        {/* Gallery Grid */}

        <div className="row">

          {galleryData.length >
          0 ? (

            galleryData.map(
              (
                item,
                index
              ) => (

                <div
                  className="col-lg-4 col-md-6 mb-4"
                  key={index}
                >

                  <div
                    className="photo-item"
                    onClick={() =>
                      openGallery(
                        item
                      )
                    }
                    style={{
                      cursor:
                        "pointer",
                    }}
                  >

                    {/* Cover Image */}

                    <img
                      src={
                        item
                          ?.photos?.[0]

                          ? `${API}/uploads/${item.photos[0]}`

                          : "https://via.placeholder.com/400x300"
                      }
                      alt=""
                      className="img-fluid rounded"
                      style={{
                        height:
                          "250px",
                        width:
                          "100%",
                        objectFit:
                          "cover",
                      }}
                    />

                    {/* Overlay */}

                    <div className="photo-overlay">

                      <div className="overlay-icon">

                        <i className="fas fa-images"></i>

                      </div>

                      <h5>

                        {item?.title ||
                          "Gallery"}

                      </h5>

                      <span className="photo-count">

                        +
                        {item
                          ?.photos
                          ?.length ||
                          0}{" "}

                        Photos

                      </span>

                    </div>

                  </div>

                </div>

              )
            )

          ) : (

            <div className="text-center py-5">

              <h4>

                No Gallery Found

              </h4>

            </div>

          )}

        </div>

      </div>

      {/* FULLSCREEN VIEWER */}

      {selectedGallery && (

        <div className="gallery-viewer">

          {/* CLOSE */}

          <button
            className="close-gallery"
            onClick={
              closeGallery
            }
          >

            ×

          </button>

          {/* MAIN IMAGE */}

          <img
            src={
              `${API}/uploads/${
                selectedGallery
                  .photos[
                  currentIndex
                ]
              }`
            }
            alt=""
            className="viewer-image"
          />

          {/* LEFT */}

          <button
            className="gallery-arrow left-arrow"
            onClick={
              prevImage
            }
          >

            ❮

          </button>

          {/* RIGHT */}

          <button
            className="gallery-arrow right-arrow"
            onClick={
              nextImage
            }
          >

            ❯

          </button>

          {/* THUMBNAILS */}

          <div className="thumbnail-wrapper">

            {selectedGallery.photos.map(
              (
                photo,
                index
              ) => (

                <img
                  key={index}
                  src={`${API}/uploads/${photo}`}
                  alt=""
                  className={
                    currentIndex ===
                    index

                      ? "thumbnail active-thumb"

                      : "thumbnail"
                  }
                  onClick={() =>
                    setCurrentIndex(
                      index
                    )
                  }
                />

              )
            )}

          </div>

        </div>

      )}

    </section>

  );

}

export default Gallery;