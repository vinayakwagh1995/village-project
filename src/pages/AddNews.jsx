import { useState } from "react";
import axios from "axios";

import {
  Link,
  useNavigate,
} from "react-router-dom";

function AddNews() {

  const navigate = useNavigate();

  const [title, setTitle] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [description, setDescription] =
    useState("");

  /* Submit */

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
  "https://village-project-z9kk.onrender.com/api/news-add",
  {
    title,
    category,
    description,
    date:
      new Date().toLocaleDateString(),
  }
);

      alert(
        "News Added Successfully"
      );

      setTitle("");

      setCategory("");

      setDescription("");

      /* Redirect */

      navigate("/admin-dashboard");

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <section className="admin-page py-5">

      <div className="container">

        {/* Top Header */}

        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">

          <h2 className="fw-bold">

            <i className="fas fa-plus-circle me-2 text-primary"></i>

            Add News

          </h2>

          <div className="d-flex gap-3">

            {/* Dashboard */}

            <Link
              to="/admin-dashboard"
              className="btn btn-dark rounded-pill px-4"
            >

              <i className="fas fa-arrow-left me-2"></i>

              Dashboard

            </Link>

            {/* Home */}

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
          className="admin-form shadow-sm"
          onSubmit={handleSubmit}
        >

          {/* Title */}

          <div className="mb-3">

            <label className="form-label fw-semibold">

              News Title

            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter News Title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />

          </div>

          {/* Description */}

          <div className="mb-3">

            <label className="form-label fw-semibold">

              Description

            </label>

            <textarea
              className="form-control"
              rows="5"
              placeholder="Enter News Description"
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
            ></textarea>

          </div>

          {/* Category */}

          <div className="mb-4">

            <label className="form-label fw-semibold">

              Category

            </label>

            <select
              className="form-select"
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
            >

              <option value="">
                Select Category
              </option>

              <option value="शिक्षण">
                शिक्षण
              </option>

              <option value="विकास">
                विकास
              </option>

              <option value="सण-उत्सव">
                सण-उत्सव
              </option>

            </select>

          </div>

          {/* Submit */}

          <button className="btn btn-primary px-5 py-2 rounded-pill">

            <i className="fas fa-save me-2"></i>

            Add News

          </button>

        </form>

      </div>

    </section>

  );
}

export default AddNews;