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

  /* Fetch News */

  useEffect(() => {

    fetchNews();

  }, []);

  const fetchNews = async () => {

    try {

      const res = await axios.get(
        `${API}/api/news`
      );

      setNewsData(res.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  return (

    <section
      id="news"
      className="news-section py-5"
    >

      <div className="container">

        {/* Heading */}

        <div className="text-center mb-5">

          <h2 className="page-title">

            <i className="fas fa-newspaper me-2"></i>

            गावातील बातम्या

          </h2>

          <p className="text-muted">

            गावातील नवीन घडामोडी आणि अपडेट्स

          </p>

        </div>

        {/* Loading */}

        {loading ? (

          <div className="text-center py-5">

            <div className="spinner-border text-primary"></div>

          </div>

        ) : (

          <div className="row">

            {newsData.map((news, index) => (

              <div
                className="col-lg-4 col-md-6 mb-4"
                key={index}
              >

                <div className="news-card h-100 shadow-sm rounded-4 overflow-hidden">

                  {/* News Image */}

                  <img
                    src={`${API}/uploads/${news.image}`}
                    alt=""
                    className="img-fluid w-100"
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body d-flex flex-column p-4">

                    {/* Category */}

                    <span className="news-category">

                      {news.category || "Village News"}

                    </span>

                    {/* Title */}

                    <h4 className="card-title mt-3 mb-3">

                      {news.title}

                    </h4>

                    {/* Date */}

                    <div className="news-meta mb-3">

                      <i className="fas fa-calendar-alt me-2"></i>

                      {new Date(
                        news.createdAt
                      ).toLocaleDateString()}

                    </div>

                    {/* Description */}

                    <p className="card-text flex-grow-1">

                      {news.description?.length > 120

                        ? `${news.description.substring(0, 120)}...`

                        : news.description}

                    </p>

                    {/* Button */}

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

            ))}

          </div>

        )}

      </div>

      {/* MODAL */}

      {selectedNews && (

        <div className="custom-modal-overlay">

          <div className="custom-modal-box">

            {/* Close */}

            <button
              className="close-btn"
              onClick={() =>
                setSelectedNews(null)
              }
            >

              ×

            </button>

            {/* Image */}

            <img
              src={`${API}/uploads/${selectedNews.image}`}
              alt=""
              className="img-fluid rounded mb-4"
            />

            {/* Category */}

            <span className="news-category">

              {selectedNews.category || "Village News"}

            </span>

            {/* Title */}

            <h2 className="mt-4 mb-3">

              {selectedNews.title}

            </h2>

            {/* Date */}

            <p className="text-muted">

              <i className="fas fa-calendar-alt me-2"></i>

              {new Date(
                selectedNews.createdAt
              ).toLocaleDateString()}

            </p>

            {/* Description */}

            <p className="mt-4 news-full-desc">

              {selectedNews.description}

            </p>

          </div>

        </div>

      )}

    </section>

  );

}

export default News;