function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5>
              <i className="fas fa-home me-2"></i>
              
            </h5>

            <p className="mt-3">
              भाडळे
 एक समृद्ध आणि
              सांस्कृतिक वारसा जपणारे गाव.
            </p>
          </div>

          <div className="col-lg-4 mb-4">
            <h5>महत्वाचे दुवे</h5>

            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <a href="#home">मुख्य पान</a>
              </li>

              <li className="mb-2">
                <a href="#village-info">
                  गावाची माहिती
                </a>
              </li>

              <li className="mb-2">
                <a href="#news">बातम्या</a>
              </li>

              <li className="mb-2">
                <a href="#gallery">
                  गॅलरी
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 mb-4">
            <h5>संपर्क</h5>

            <p className="mt-3 mb-2">
              <i className="fas fa-map-marker-alt me-2"></i>
              भाडळे

            </p>

            <p className="mb-2">
              <i className="fas fa-phone me-2"></i>
              +91 
            </p>

            <p>
              <i className="fas fa-envelope me-2"></i>
              info@bhadale.com
            </p>
          </div>
        </div>

        <hr className="my-4 text-light" />

        <div className="text-center">
          <p className="mb-0">
            © 2026 भाडळे
 गाव | सर्व हक्क राखीव
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;