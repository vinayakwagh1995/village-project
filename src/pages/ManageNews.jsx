function ManageNews() {

  return (

    <section className="admin-page py-5">

      <div className="container">

        <h2 className="mb-4">
          Manage News
        </h2>

        <div className="manage-card">

          <h4>
            नवीन शाळेचे उद्घाटन
          </h4>

          <p>
            गावात नवीन प्राथमिक शाळेचे उद्घाटन झाले.
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

export default ManageNews;