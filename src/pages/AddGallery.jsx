import { useState } from "react";

import axios from "axios";

import {
  Link,
  useNavigate,
} from "react-router-dom";

function AddGallery() {

  const navigate =
    useNavigate();

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

  /* SUBMIT */

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const formData =
        new FormData();

      /* CATEGORY AS TITLE */

      formData.append(
        "title",
        category
      );

      /* PHOTOS */

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

      /* UPLOAD */

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

        {/* HEADER */}

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

          {/* BUTTONS */}

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

        {/* FORM */}

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

          {/* CATEGORY */}

          <div className="mb-4">

            <label className="form-label fw-bold">

              Select Gallery Section

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
                Select Section
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

          {/* PHOTOS */}

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

          {/* PREVIEW */}

          {images.length > 0 && (

            <div className="row mb-4">

              {images.map(
                (
                  image,
                  index
                ) => (

                  <div
                    className="col-lg-3 col-md-4 col-6 mb-3"
                    key={index}
                  >

                    <img
                      src={URL.createObjectURL(image)}
                      alt=""
                      className="img-fluid rounded"
                      style={{
                        height:
                          "150px",

                        width:
                          "100%",

                        objectFit:
                          "cover",
                      }}
                    />

                  </div>

                )
              )}

            </div>

          )}

          {/* BUTTON */}

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