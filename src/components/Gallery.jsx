import { useEffect, useState } from "react";
import axios from "axios";

function Gallery() {

  const [galleryData, setGalleryData] =
    useState([]);

  const [selectedGallery, setSelectedGallery] =
    useState(null);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  /* API URL */

  const API =
    "https://village-project-z9kk.onrender.com";

  /* Fetch Gallery */

  useEffect(() => {

    fetchGallery();

  }, []);

  const fetchGallery = async () => {

    try {

      const res = await axios.get(
        `${API}/api/gallery`
      );

      setGalleryData(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  /* Open Gallery */

  const openGallery = (gallery) => {

    setSelectedGallery(gallery);

    setCurrentIndex(0);

  };

  /* Close Gallery */

  const closeGallery = () => {

    setSelectedGallery(null);

  };

  /* Next Image */

  const nextImage = () => {

    setCurrentIndex((prev) =>

      prev === selectedGallery.photos.length - 1
        ? 0
        : prev + 1

    );

  };

  /* Previous Image */

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

          {galleryData.map((item, index) => (

            <div
              className="col-lg-4 col-md-6 mb-4"
              key={index}
            >

              <div
                className="photo-item"
                onClick={() =>
                  openGallery(item)
                }
              >

                {/* Cover Image */}

                <img
                  src={`${API}/uploads/${item.photos[0]}`}
                  alt=""
                  className="img-fluid"
                />

                {/* Overlay */}

                <div className="photo-overlay">

                  <div className="overlay-icon">

                    <i className="fas fa-images"></i>

                  </div>

                  <h5>
                    {item.title}
                  </h5>

                  <span className="photo-count">

                    +{item.photos.length} Photos

                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* FULLSCREEN VIEWER */}

      {selectedGallery && (

        <div className="gallery-viewer">

          {/* Close */}

          <button
            className="close-gallery"
            onClick={closeGallery}
          >

            ×

          </button>

          {/* Main Image */}

          <img
            src={`${API}/uploads/${
              selectedGallery.photos[currentIndex]
            }`}
            alt=""
            className="viewer-image"
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