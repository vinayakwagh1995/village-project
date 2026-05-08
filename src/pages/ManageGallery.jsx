function ManageGallery() {

  return (

    <section className="admin-page py-5">

      <div className="container">

        <h2 className="mb-4">
          Manage Gallery
        </h2>

        <div className="manage-card">

          <h4>
            गाव रस्ता
          </h4>

          <p>
            Total Photos: 5
          </p>

          <div className="d-flex gap-3">

            <button className="btn btn-warning">
              Edit
            </button>

            <button className="btn btn-danger">
              Delete
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ManageGallery;