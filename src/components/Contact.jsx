function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="page-title">
          <i className="fas fa-phone me-2"></i>
          संपर्क
        </h2>

        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="mb-4">
                  <i className="fas fa-address-book me-2"></i>
                  संपर्क माहिती
                </h4>

                <div className="contact-card">
                  <h6>ग्रामपंचायत कार्यालय</h6>

                  <p className="mb-2">
                    <i className="fas fa-map-marker-alt me-2"></i>
                    भाडळे , सातारा , महाराष्ट्र
                  </p>

                  <p className="mb-2">
                    <i className="fas fa-phone me-2"></i>
                    +91 
                  </p>

                  <p className="mb-0">
                    <i className="fas fa-envelope me-2"></i>
                    
                  </p>
                </div>

                <div className="contact-card">
                  <h6>कार्यालयीन वेळ</h6>

                  <p className="mb-2">
                    सोमवार - शुक्रवार
                  </p>

                  <p className="mb-0">
                    सकाळी 10 ते संध्याकाळी 6
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="mb-4">
                  <i className="fas fa-paper-plane me-2"></i>
                  संदेश पाठवा
                </h4>

                <form>
                  <div className="mb-3">
                    <label className="form-label">
                      नाव
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="तुमचे नाव"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      ईमेल
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="तुमचा ईमेल"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      संदेश
                    </label>

                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="तुमचा संदेश"
                    ></textarea>
                  </div>

                  <button className="btn btn-primary">
                    <i className="fas fa-paper-plane me-2"></i>
                    पाठवा
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;