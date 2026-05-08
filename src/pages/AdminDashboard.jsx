import { useContext, useEffect, useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { Context } from "../main";

function AdminDashboard() {

  const { user } = useContext(Context);

  const navigate = useNavigate();

  /* News Count */

  const [newsCount, setNewsCount] =
    useState(0);

  /* Gallery Count */

  const [galleryCount, setGalleryCount] =
    useState(0);

  /* Logout */

  const handleLogout = () => {

    navigate("/");

  };

  /* Fetch News Count */

  useEffect(() => {

    fetch("https://village-project-z9kk.onrender.com")
      .then((res) => res.json())
      .then((data) => {

        setNewsCount(data.length);

      })
      .catch((err) => {

        console.log(err);

      });

  }, []);

  /* Fetch Gallery Count */

  useEffect(() => {

    fetch("https://village-project-z9kk.onrender.com")
      .then((res) => res.json())
      .then((data) => {

        let total = 0;

        data.forEach((item) => {

          const photos =
            JSON.parse(item.images || "[]");

          total += photos.length;

        });

        setGalleryCount(total);

      })
      .catch((err) => {

        console.log(err);

      });

  }, []);

  return (

    <section className="admin-dashboard py-5">

      <div className="container">

        {/* Top Header */}

        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-5">

          <div>

            <h1 className="dashboard-title fw-bold">

              <i className="fas fa-tachometer-alt me-3 text-primary"></i>

              Admin Dashboard

            </h1>

            <p className="dashboard-subtitle text-muted mb-0">

              Welcome back,
              <strong>
                {" "}
                {user?.name || "Admin"}
              </strong>

            </p>

          </div>

          {/* Top Buttons */}

          <div className="d-flex gap-3 flex-wrap">

            <Link
              to="/"
              className="btn btn-outline-primary px-4 py-2 rounded-pill"
            >

              <i className="fas fa-eye me-2"></i>

              Public View

            </Link>

            <button
              onClick={handleLogout}
              className="btn btn-danger px-4 py-2 rounded-pill"
            >

              <i className="fas fa-sign-out-alt me-2"></i>

              Logout

            </button>

          </div>

        </div>

        {/* Stats */}

        <div className="row g-4 mb-5">

          {/* News */}

          <div className="col-lg-4 col-md-6">

            <div className="dashboard-card shadow-sm p-4 rounded-4 h-100">

              <div className="d-flex align-items-center">

                <div className="dashboard-icon bg-info text-white me-4">

                  <i className="fas fa-newspaper"></i>

                </div>

                <div>

                  <h2 className="fw-bold mb-1">

                    {newsCount}

                  </h2>

                  <p className="text-muted mb-0">

                    Total News

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Gallery */}

          <div className="col-lg-4 col-md-6">

            <div className="dashboard-card shadow-sm p-4 rounded-4 h-100">

              <div className="d-flex align-items-center">

                <div className="dashboard-icon bg-success text-white me-4">

                  <i className="fas fa-images"></i>

                </div>

                <div>

                  <h2 className="fw-bold mb-1">

                    {galleryCount}

                  </h2>

                  <p className="text-muted mb-0">

                    Gallery Photos

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Last Update */}

          <div className="col-lg-4 col-md-6">

            <div className="dashboard-card shadow-sm p-4 rounded-4 h-100">

              <div className="d-flex align-items-center">

                <div className="dashboard-icon bg-warning text-white me-4">

                  <i className="fas fa-clock"></i>

                </div>

                <div>

                  <h2 className="fw-bold mb-1">

                    आज

                  </h2>

                  <p className="text-muted mb-0">

                    Last Update

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Quick Actions */}

        <div className="dashboard-box shadow-sm p-4 rounded-4">

          <h4 className="mb-4 fw-bold">

            <i className="fas fa-bolt text-warning me-2"></i>

            Quick Actions

          </h4>

          <div className="row g-3">

            {/* Add News */}

            <div className="col-md-4">

              <Link
                to="/add-news"
                className="btn btn-primary w-100 py-3 rounded-4"
              >

                <i className="fas fa-plus me-2"></i>

                नवीन बातमी जोडा

              </Link>

            </div>

            {/* Add Gallery */}

            <div className="col-md-4">

              <Link
                to="/add-gallery"
                className="btn btn-success w-100 py-3 rounded-4"
              >

                <i className="fas fa-image me-2"></i>

                नवीन फोटो जोडा

              </Link>

            </div>

            {/* Manage Content */}

            <div className="col-md-4">

              <Link
                to="/manage-content"
                className="btn btn-dark w-100 py-3 rounded-4"
              >

                <i className="fas fa-edit me-2"></i>

                Content व्यवस्थापन

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default AdminDashboard;