import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {

  const [search, setSearch] =
    useState("");

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow-sm">

      <div className="container-fluid px-4">

        {/* Logo */}

        <a className="navbar-brand" href="#home">

          <i className="fas fa-home me-2"></i>

          भाडळे

        </a>

        {/* Mobile Toggle */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >

          <span className="navbar-toggler-icon"></span>

        </button>

        {/* Navbar Links */}

        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >

          <div className="navbar-nav-container d-flex align-items-center justify-content-between w-100 flex-column flex-lg-row">

            <ul className="navbar-nav flex-column flex-lg-row flex-wrap mx-auto gap-lg-3 text-center">

              <li className="nav-item">

                <a className="nav-link" href="#home">

                  मुख्य पान

                </a>

              </li>

              <li className="nav-item">

                <a className="nav-link" href="#village-info">

                  गावाची माहिती

                </a>

              </li>

              <li className="nav-item">

                <a className="nav-link" href="#news">

                  <i className="fas fa-newspaper me-1"></i>

                  बातम्या

                </a>

              </li>

              <li className="nav-item">

                <a className="nav-link" href="#gallery">

                  <i className="fas fa-images me-1"></i>

                  फोटो गॅलरी

                </a>

              </li>

              {/* Reels */}

              <li className="nav-item">

                <a className="nav-link" href="#reels">

                  <i className="fab fa-instagram me-1"></i>

                  Reels

                </a>

              </li>

              <li className="nav-item">

                <a className="nav-link" href="#contact">

                  <i className="fas fa-phone-alt me-1"></i>

                  संपर्क

                </a>

              </li>

              <li className="nav-item">

                <a className="nav-link" href="#important-info">

                  <i className="fas fa-info-circle me-1"></i>

                  महत्वाची माहिती

                </a>

              </li>

            </ul>

            {/* Right Side */}

            <div className="d-flex align-items-center gap-2 flex-column flex-lg-row mt-3 mt-lg-0">

              {/* Search */}

              <input
                className="form-control"
                type="search"
                placeholder="शोधा..."
                style={{ width: "180px" }}

                value={search}

                onChange={(e) =>
                  setSearch(e.target.value)
                }

                onKeyDown={(e) => {

                  if (e.key === "Enter") {

                    const value =
                      search.toLowerCase();

                    /* News */

                    if (
                      value.includes("news") ||
                      value.includes("बातमी")
                    ) {

                      window.location.href =
                        "#news";
                    }

                    /* Gallery */

                    else if (
                      value.includes("gallery") ||
                      value.includes("गॅलरी")
                    ) {

                      window.location.href =
                        "#gallery";
                    }

                    /* Reels */

                    else if (
                      value.includes("reels")
                    ) {

                      window.location.href =
                        "#reels";
                    }

                    /* Contact */

                    else if (
                      value.includes("संपर्क")
                    ) {

                      window.location.href =
                        "#contact";
                    }

                    /* Village */

                    else if (
                      value.includes("गाव")
                    ) {

                      window.location.href =
                        "#village-info";
                    }

                  }

                }}
              />

              {/* Admin */}

              <Link
                to="/admin-login"
                className="btn btn-outline-light"
              >

                <i className="fas fa-user-cog me-1"></i>

                Admin

              </Link>

            </div>

          </div>

        </div>

      </div>

    </nav>

  );

}

export default Navbar;