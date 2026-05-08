import { useEffect, useState } from "react";
import axios from "axios";

function Gallery() {

  const [galleryData, setGalleryData] =
    useState([]);

  const [selectedGallery, setSelectedGallery] =
    useState(null);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  /* Fetch Gallery */

  useEffect(() => {

    fetchGallery();

  }, []);

  const fetchGallery = async () => {

    try {

      const res = await axios.get(
        "https://village-project-z9kk.onrender.com"
      );

      setGalleryData(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  /* Group Category Photos */

  const groupedGallery = {};

  galleryData.forEach((item) => {

    if (!groupedGallery[item.category]) {

      groupedGallery[item.category] = [];

    }

    const photos =
      JSON.parse(item.images || "[]");

    photos.forEach((photo) => {

      groupedGallery[item.category].push(photo);

    });

  });

  /* Open Gallery */

  const openGallery = (gallery) => {

    setSelectedGallery(gallery);

    setCurrentIndex(0);

  };

  /* Close Gallery */

  const closeGallery = () => {

    setSelectedGallery(null);

  };

  /* Next */

  const nextImage = () => {

    setCurrentIndex((prev) =>

      prev === selectedGallery.photos.length - 1
        ? 0
        : prev + 1

    );

  };

  /* Prev */

  const prevImage = () => {

    setCurrentIndex((prev) =>

      prev === 0
        ? selectedGallery.photos.length - 1
        : prev - 1

    );

  };

  return (

    <section id="gallery" className="py-5">

      <div className="container">

        {/* Heading */}

        <div className="text-center mb-5">

          <h2 className="page-title">

            <i className="fas fa-images me-2"></i>

            फोटो गॅलरी

          </h2>

          <p className="text-muted">

            गावातील सुंदर क्षण आणि आठवणी

          </p>

        </div>

        {/* Gallery Grid */}

        <div className="row">

          {Object.keys(groupedGallery).map(
            (category, index) => {

              const photos =
                groupedGallery[category];

              const coverImage =
                `http://localhost:5000/uploads/${photos[0]}`;

              return (

                <div
                  className="col-lg-4 col-md-6 mb-4"
                  key={index}
                >

                  <div
                    className="photo-item"
                    onClick={() =>
                      openGallery({
                        category,
                        photos,
                      })
                    }
                  >

                    {/* Image */}

                    <img
                      src={coverImage}
                      alt=""
                      className="img-fluid"
                    />

                    {/* Overlay */}

                    <div className="photo-overlay">

                      {/* Icon */}

                      <div className="overlay-icon">

                        <i className="fas fa-images"></i>

                      </div>

                      {/* Category */}

                      <h5>
                        {category}
                      </h5>

                      {/* Count */}

                      <span className="photo-count">

                        +{photos.length} Photos

                      </span>

                      {/* View More */}

                      <p className="view-more-text">

                        View More Photos

                      </p>

                    </div>

                  </div>

                </div>

              );

            }
          )}

        </div>

      </div>

      {/* ==========================
          FULLSCREEN GALLERY
      ========================== */}

      {selectedGallery && (

        <div className="gallery-viewer">

          {/* Close */}

          <button
            className="close-gallery"
            onClick={closeGallery}
          >

            ×

          </button>

          {/* Left Preview */}

          <img
            src={`http://localhost:5000/uploads/${
              selectedGallery.photos[
                currentIndex === 0
                  ? selectedGallery.photos.length - 1
                  : currentIndex - 1
              ]
            }`}
            alt=""
            className="side-image left-side"
            onClick={prevImage}
          />

          {/* Main Image */}

          <img
            src={`http://localhost:5000/uploads/${
              selectedGallery.photos[currentIndex]
            }`}
            alt=""
            className="viewer-image"
          />

          {/* Right Preview */}

          <img
            src={`http://localhost:5000/uploads/${
              selectedGallery.photos[
                currentIndex ===
                selectedGallery.photos.length - 1
                  ? 0
                  : currentIndex + 1
              ]
            }`}
            alt=""
            className="side-image right-side"
            onClick={nextImage}
          />

          {/* Left Arrow */}

          <button
            className="gallery-arrow left-arrow"
            onClick={prevImage}
          >

            ❮

          </button>

          {/* Right Arrow */}

          <button
            className="gallery-arrow right-arrow"
            onClick={nextImage}
          >

            ❯

          </button>

        </div>

      )}

    </section>

  );

}

export default Gallery;