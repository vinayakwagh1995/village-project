import { useState } from "react";

import axios from "axios";

import {
  Link,
  useNavigate,
} from "react-router-dom";

function AddGallery() {

  const navigate = useNavigate();

  const [title, setTitle] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [images, setImages] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  /* Submit */

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    const formData =
      new FormData();

    formData.append(
      "title",
      title
    );

    formData.append(
      "category",
      category
    );

    for (
      let i = 0;
      i < images.length;
      i++
    ) {

      formData.append(
        "images",
        images[i]
      );

    }

    try {

      await axios.post(
        "https://village-project-z9kk.onrender.com",
        formData
      );

      alert(
        "Gallery Added Successfully"
      );

      setTitle("");

      setCategory("");

      setImages([]);

      navigate(
        "/admin-dashboard"
      );

    } catch (error) {

      console.log(error);

      alert(
        "Something went wrong"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <section className="admin-page py-5">

      <div className="container">

        {/* Header */}

        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-5">

          <div>

            <h2 className="fw-bold mb-1">

              <i className="fas fa-images me-2 text-primary"></i>

              Add Gallery

            </h2>

            <p className="text-muted mb-0">

              नवीन फोटो गॅलरी जोडा

            </p>

          </div>

          {/* Buttons */}

          <div className="d-flex gap-3 flex-wrap">

            <Link
              to="/admin-dashboard"
              className="btn btn-dark rounded-pill px-4"
            >

              <i className="fas fa-arrow-left me-2"></i>

              Dashboard

            </Link>

            <Link
              to="/"
              className="btn btn-outline-primary rounded-pill px-4"
            >

              <i className="fas fa-home me-2"></i>

              Home

            </Link>

          </div>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          style={{
            background: "#ffffff",
            padding: "30px",
            borderRadius: "25px",
            boxShadow:
              "0 5px 20px rgba(0,0,0,0.08)",
          }}
        >

          {/* Title */}

          <div className="mb-4">

            <label className="form-label fw-bold">

              Gallery Title

            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter Gallery Title"
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }
              required
              style={{
                height: "55px",
                borderRadius: "15px",
                background: "#f8f9fa",
                border:
                  "1px solid #ddd",
              }}
            />

          </div>

          {/* Category */}

          <div className="mb-4">

            <label className="form-label fw-bold">

              Select Category

            </label>

            <select
              className="form-select"
              value={category}
              onChange={(e) =>
                setCategory(
                  e.target.value
                )
              }
              required
              style={{
                height: "55px",
                borderRadius: "15px",
                background: "#f8f9fa",
                border:
                  "1px solid #ddd",
              }}
            >

              <option value="">
                Select Category
              </option>

              <option value="गावाचे सुंदर दृश्य">
                गावाचे सुंदर दृश्य
              </option>

              <option value="सण उत्सव">
                सण उत्सव
              </option>

              <option value="गाव रस्ता">
                गाव रस्ता
              </option>

            </select>

          </div>

          {/* Images */}

          <div className="mb-4">

            <label className="form-label fw-bold">

              Upload Photos

            </label>

            <input
              type="file"
              multiple
              className="form-control"
              onChange={(e) =>
                setImages(
                  e.target.files
                )
              }
              required
              style={{
                padding: "14px",
                borderRadius: "15px",
                background: "#f8f9fa",
                border:
                  "1px solid #ddd",
              }}
            />

          </div>

          {/* Button */}

          <button
            className="btn btn-primary px-5 py-3 rounded-pill"
            disabled={loading}
          >

            {loading ? (

              "Uploading..."

            ) : (

              <>
                <i className="fas fa-upload me-2"></i>

                Upload Photos

              </>

            )}

          </button>

        </form>

      </div>

    </section>

  );

}

export default AddGallery;