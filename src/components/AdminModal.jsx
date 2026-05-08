function AdminModal() {
  return (
    <div
      className="modal fade"
      id="adminModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Admin Login</h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Username"
            />

            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>

          <div className="modal-footer">
            <button className="btn btn-primary">
              Login
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminModal;