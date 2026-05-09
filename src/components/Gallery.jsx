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

  /* FETCH GALLERY */

  useEffect(() => {

    fetchGallery();

  }, []);

  const fetchGallery = async () => {

    try {

      const res =
        await axios.get(
          `${API}/api/gallery`
        );

      /* VALID DATA */

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

      /* GROUP SAME TITLES */

      const groupedData = [];

      validData.forEach((item) => {

        const existing =
          groupedData.find(
            (g) =>
              g.title === item.title
          );

        if (existing) {

          existing.photos.push(
            ...item.photos
          );

        } else {

          groupedData.push({

            ...item,

            photos: [
              ...item.photos,
            ],

          });

        }

      });

      setGalleryData(groupedData);

    } catch (error) {

      console.log(error);

    }

  };

  /* OPEN GALLERY */

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

  /* CLOSE */

  const closeGallery = () => {

    setSelectedGallery(null);

  };

  /* NEXT IMAGE */

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

  /* PREVIOUS IMAGE */

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

        {/* HEADING */}

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

        {/* GALLERY GRID */}

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

                    {/* COVER IMAGE */}

                    <img
                      src={`${API}/uploads/${item.photos[0]}`}
                      alt=""
                      className="img-fluid rounded"
                    />

                    {/* OVERLAY */}

                    <div className="photo-overlay">

                      <div className="overlay-icon">

                        <i className="fas fa-images"></i>

                      </div>

                      <h5>

                        {item.title}

                      </h5>

                      <span className="photo-count">

                        +
                        {item.photos.length}{" "}

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
            src={`${API}/uploads/${
              selectedGallery.photos[
                currentIndex
              ]
            }`}
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