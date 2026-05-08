function VillageInfo() {
  return (
    <section id="village-info" className="py-5">
      <div className="container">
        <h2 className="page-title">
          <i className="fas fa-info-circle me-2"></i>
          गावाची माहिती
        </h2>

        <div className="row mb-5">
          <div className="col-md-3 mb-4">
            <div className="stat-card text-center">
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>

              <h3>3220</h3>
              <p>लोकसंख्या</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="stat-card text-center">
              <div className="stat-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>

              <h3>21.54</h3>
              <p>चौ. कि.मी. क्षेत्र</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="stat-card text-center">
              <div className="stat-icon">
                <i className="fas fa-calendar"></i>
              </div>

              <h3>1850</h3>
              <p>स्थापना</p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="stat-card text-center">
              <div className="stat-icon">
                <i className="fas fa-map-pin"></i>
              </div>

              <h3>415021</h3>
              <p>पिन कोड</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <h4 className="mb-3">
                  <i className="fas fa-history me-2"></i>
                  इतिहास
                </h4>

                <p>
                  भाडळे हे भारतातील महाराष्ट्र राज्यातील सातारा जिल्ह्यातील कोरेगाव तालुक्यातील एक गाव आहे.
                  गाव आपल्या समृद्ध कृषी परंपरेसाठी प्रसिद्ध आहे.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h4 className="mb-3">
                  <i className="fas fa-seedling me-2"></i>
                  संस्कृती आणि परंपरा
                </h4>

                <p>
                  गावात विविध सण मोठ्या उत्साहात साजरे केले जातात.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h4 className="mb-4">
                  <i className="fas fa-chart-bar me-2"></i>
                  आकडेवारी
                </h4>

                <div className="d-flex justify-content-between mb-3">
                  <strong>लोकसंख्या:</strong>
                  <span>3220</span>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <strong>क्षेत्रफळ:</strong>
                  <span>21.54 चौ. कि.मी</span>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <strong>जिल्हा:</strong>
                  <span>सातारा</span>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <strong>राज्य:</strong>
                  <span>महाराष्ट्र</span>
                </div>

                <div className="d-flex justify-content-between">
                  <strong>पिन कोड:</strong>
                  <span>415021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VillageInfo;