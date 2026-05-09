import { useState } from "react";

import axios from "axios";

import {
  Link,
  useNavigate,
} from "react-router-dom";

function AddGallery() {

  const navigate =
    useNavigate();

  const [title, setTitle] =
    useState("");

  const [
    category,
    setCategory,
  ] = useState("");

  const [images, setImages] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  /* API */

const API =
  "https://village-project-z9kk.onrender.com";

  /* Submit */

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const formData =
        new FormData();

      /* Title */

      formData.append(
        "title",
        title
      );

      /* Category */

      formData.append(
        "category",
        category
      );

      /* Photos */

      for (
        let i = 0;
        i < images.length;
        i++
      ) {

        formData.append(
          "photos",
          images[i]
        );

      }

      /* Upload */

      const res =
        await axios.post(

          `${API}/api/gallery-add`,

          formData,

          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }

        );

      console.log(res.data);

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
        "Upload Failed"
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
            background:
              "#ffffff",
            padding: "30px",
            borderRadius:
              "25px",
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

          {/* Upload Photos */}

          <div className="mb-4">

            <label className="form-label fw-bold">

              Upload Photos

            </label>

            <input
              type="file"
              multiple
              className="form-control"
              onChange={(e) =>
                setImages([
                  ...e.target.files,
                ])
              }
              required
            />

          </div>

          {/* Button */}

          <button
            type="submit"
            className="btn btn-primary px-5 py-3 rounded-pill"
            disabled={loading}
          >

            {loading
              ? "Uploading..."
              : "Upload Photos"}

          </button>

        </form>

      </div>

    </section>

  );

}

export default AddGallery;