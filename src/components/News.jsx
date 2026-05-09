import { useEffect, useState } from "react";
import axios from "axios";

function News() {

  const [newsData, setNewsData] =
    useState([]);

  const [selectedNews, setSelectedNews] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  /* API */

  const API =
    "https://village-project-z9kk.onrender.com";

  /* FETCH NEWS */

  useEffect(() => {

    fetchNews();

  }, []);

  const fetchNews = async () => {

    try {

      const res =
        await axios.get(
          `${API}/api/news`
        );

      setNewsData(res.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  /* CLOSE MODAL */

  const closeModal = () => {

    setSelectedNews(null);

  };

  return (

    <section
      id="news"
      className="news-section py-5"
    >

      <div className="container">

        {/* HEADING */}

        <div className="text-center mb-5">

          <h2 className="page-title">

            <i className="fas fa-newspaper me-2"></i>

            गावातील बातम्या

          </h2>

          <p className="text-muted">

            गावातील नवीन घडामोडी
            आणि अपडेट्स

          </p>

        </div>

        {/* LOADING */}

        {loading ? (

          <div className="text-center py-5">

            <div className="spinner-border text-primary"></div>

          </div>

        ) : (

          <div className="row">

            {newsData.length > 0 ? (

              newsData.map(
                (
                  news,
                  index
                ) => (

                  <div
                    className="col-xl-4 col-lg-4 col-md-6 mb-4"
                    key={index}
                  >

                    <div className="news-card h-100">

                      {/* IMAGE */}

                      <div
                        className="overflow-hidden"
                      >

                        <img
                          src={`${API}/uploads/${news.image}`}
                          alt=""
                          className="img-fluid w-100"
                        />

                      </div>

                      {/* BODY */}

                      <div className="card-body d-flex flex-column">

                        {/* CATEGORY */}

                        <span className="news-category">

                          {news.category ||
                            "Village News"}

                        </span>

                        {/* TITLE */}

                        <h4 className="card-title mt-3 mb-3">

                          {news.title}

                        </h4>

                        {/* DATE */}

                        <div className="news-meta mb-3">

                          <i className="fas fa-calendar-alt me-2"></i>

                          {new Date(
                            news.createdAt
                          ).toLocaleDateString()}

                        </div>

                        {/* DESCRIPTION */}

                        <p className="card-text flex-grow-1">

                          {news.description?.length > 130

                            ? `${news.description.substring(0, 130)}...`

                            : news.description}

                        </p>

                        {/* BUTTON */}

                        <button
                          className="btn btn-primary rounded-pill mt-3"
                          onClick={() =>
                            setSelectedNews(news)
                          }
                        >

                          <i className="fas fa-book-open me-2"></i>

                          संपूर्ण वाचा

                        </button>

                      </div>

                    </div>

                  </div>

                )
              )

            ) : (

              <div className="text-center py-5">

                <h4>

                  No News Found

                </h4>

              </div>

            )}

          </div>

        )}

      </div>

      {/* ===================================
          MODAL
      =================================== */}

      {selectedNews && (

        <div
          className="custom-modal-overlay"
          onClick={closeModal}
        >

          <div
            className="custom-modal-box"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* CLOSE */}

            <button
              className="close-btn"
              onClick={closeModal}
            >

              ×

            </button>

            {/* IMAGE */}

            <img
              src={`${API}/uploads/${selectedNews.image}`}
              alt=""
              className="img-fluid rounded-4 mb-4"
            />

            {/* CATEGORY */}

            <span className="news-category">

              {selectedNews.category ||
                "Village News"}

            </span>

            {/* TITLE */}

            <h2 className="fw-bold mt-4 mb-3">

              {selectedNews.title}

            </h2>

            {/* DATE */}

            <p className="news-meta mb-4">

              <i className="fas fa-calendar-alt me-2"></i>

              {new Date(
                selectedNews.createdAt
              ).toLocaleDateString()}

            </p>

            {/* DESCRIPTION */}

            <p className="news-full-desc">

              {selectedNews.description}

            </p>

          </div>

        </div>

      )}

    </section>

  );

}

export default News;