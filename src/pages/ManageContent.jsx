import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ManageContent() {

  const [newsData, setNewsData] =
    useState([]);

  const [galleryData, setGalleryData] =
    useState([]);

  /* Fetch News */

  useEffect(() => {

    fetchNews();

    fetchGallery();

  }, []);

  const fetchNews = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/news"
      );

      setNewsData(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  /* Fetch Gallery */

  const fetchGallery = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/gallery"
      );

      setGalleryData(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <section className="admin-page py-5">

      <div className="container">

        <div className="d-flex justify-content-between align-items-center mb-5">

          <h2 className="fw-bold">

            <i className="fas fa-cogs me-2"></i>

            Content व्यवस्थापन

          </h2>

        </div>

        <div className="row g-4">

          {/* News */}

          <div className="col-lg-6">

            <div className="manage-box">

              <div className="d-flex justify-content-between align-items-center mb-4">

                <h3>

                  <i className="fas fa-newspaper me-2"></i>

                  News Management

                </h3>

                <Link
                  to="/add-news"
                  className="btn btn-primary"
                >
                  Add News
                </Link>

              </div>

              {newsData.map((item) => (

                <div
                  className="manage-item"
                  key={item.id}
                >

                  <div>

                    <h5>
                      {item.title}
                    </h5>

                    <p>
                      {item.category}
                    </p>

                  </div>

                  <button className="btn btn-danger">

                    Delete

                  </button>

                </div>

              ))}

            </div>

          </div>

          {/* Gallery */}

          <div className="col-lg-6">

            <div className="manage-box">

              <div className="d-flex justify-content-between align-items-center mb-4">

                <h3>

                  <i className="fas fa-images me-2"></i>

                  Gallery Management

                </h3>

                <Link
                  to="/add-gallery"
                  className="btn btn-success"
                >
                  Add Photos
                </Link>

              </div>

              {galleryData.map((item) => {

                const photos =
                  JSON.parse(item.images || "[]");

                return (

                  <div
                    className="manage-item"
                    key={item.id}
                  >

                    <div>

                      <h5>
                        {item.category}
                      </h5>

                      <p>
                        {photos.length} Photos
                      </p>

                    </div>

                    <button className="btn btn-danger">

                      Delete

                    </button>

                  </div>

                );

              })}

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default ManageContent;