import { useEffect, useState } from "react";
import axios from "axios";

function News() {

  const [newsData, setNewsData] =
    useState([]);

  const [selectedNews, setSelectedNews] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  /* Fetch News */

  useEffect(() => {

    fetchNews();

  }, []);

  const fetchNews = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/news"
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

            <div
              className="spinner-border text-primary"
            ></div>

          </div>

        ) : (

          <div className="row">

            {newsData.map((news) => (

              <div
                className="col-lg-4 col-md-6 mb-4"
                key={news.id}
              >

                <div className="news-card h-100">

                  {/* Card Body */}

                  <div className="card-body d-flex flex-column">

                    {/* Category */}

                    <span className="news-category">

                      {news.category}

                    </span>

                    {/* Title */}

                    <h4 className="card-title mt-3 mb-3">

                      {news.title}

                    </h4>

                    {/* Date */}

                    <div className="news-meta mb-3">

                      <i className="fas fa-calendar-alt me-2"></i>

                      {news.date}

                    </div>

                    {/* Description */}

                    <p className="card-text flex-grow-1">

                      {news.description.length > 120

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

      {/* ======================
          POPUP MODAL
      ======================= */}

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

            {/* Category */}

            <span className="news-category">

              {selectedNews.category}

            </span>

            {/* Title */}

            <h2 className="mt-4 mb-3">

              {selectedNews.title}

            </h2>

            {/* Date */}

            <p className="text-muted">

              <i className="fas fa-calendar-alt me-2"></i>

              {selectedNews.date}

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