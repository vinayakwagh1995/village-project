function ImportantInfo() {
  return (
    <section id="important-info" className="py-5">
      <div className="container">
        <h2 className="page-title">
          <i className="fas fa-exclamation-triangle me-2"></i>
          महत्वाची माहिती
        </h2>

        <div className="row">
          <div className="col-lg-8 mb-4">
            <div className="card">
              <div className="card-body">
                <h4 className="mb-4">
                  <i className="fas fa-file-alt me-2"></i>
                  सरकारी योजना
                </h4>

                <div className="scheme-card">
                  <h5>प्रधानमंत्री आवास योजना</h5>

                  <p>गरीब कुटुंबांसाठी घर बांधण्याची योजना</p>

                  <small>
                    पात्रता: BPL कुटुंब
                  </small>
                </div>

                <div className="scheme-card">
                  <h5>किसान सन्मान निधी</h5>

                  <p>शेतकऱ्यांना आर्थिक मदत</p>

                  <small>
                    वार्षिक आर्थिक सहाय्य
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h4 className="mb-4">
                  <i className="fas fa-phone-alt me-2"></i>
                  आणीबाणीचे नंबर
                </h4>

                <div className="emergency-contact">
                  <i className="fas fa-ambulance"></i>

                  <div>
                    <h6>रुग्णवाहिका</h6>
                    <p className="mb-0">108</p>
                  </div>
                </div>

                <div className="emergency-contact">
                  <i className="fas fa-shield-alt"></i>

                  <div>
                    <h6>पोलीस</h6>
                    <p className="mb-0">100</p>
                  </div>
                </div>

                <div className="emergency-contact">
                  <i className="fas fa-fire-extinguisher"></i>

                  <div>
                    <h6>अग्निशमन</h6>
                    <p className="mb-0">101</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImportantInfo;