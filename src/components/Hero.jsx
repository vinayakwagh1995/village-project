import villageImg from "../assets/village.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="hero-banner"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0, 0, 0, 0.100),
            rgba(0, 0, 0, 0.50)
          ),
          url(${villageImg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container-fluid px-5">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-7">

            <div
              className="hero-content"
              style={{
                transform: "translateY(-70px)",
              }}
            >

              <h1
                className="display-1 fw-bold mb-4 text-white"
                style={{
                  textShadow: "4px 4px 18px rgba(0,0,0,0.95)",
                  lineHeight: "1.1",
                }}
              >
                भाडळे गावात आपले
                <br />
                स्वागत आहे
              </h1>

              <p
                className="lead text-white mb-5"
                style={{
                  textShadow: "2px 2px 10px rgba(0,0,0,0.95)",
                  fontSize: "1.1rem",
                  maxWidth: "750px",
                }}
              >
                भारतातील महाराष्ट्र राज्यातील सातारा जिल्ह्यातील
                कोरेगाव तालुक्यातील एक गाव —
                संस्कृती आणि शेतीच्या वारसाने नटलेले.
              </p>

              <div className="d-flex gap-3 flex-wrap">

                <a
                  href="#village-info"
                  className="btn btn-light btn-lg px-4 py-3 rounded-pill"
                >
                  <i className="fas fa-info-circle me-2"></i>
                  गावाची माहिती
                </a>

                <a
                  href="#contact"
                  className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill"
                >
                  <i className="fas fa-phone me-2"></i>
                  संपर्क
                </a>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;