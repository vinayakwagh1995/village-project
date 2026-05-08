import { useState } from "react";

function ReelsSection() {

  const reels = [

    "https://www.instagram.com/reel/DVqyY8biPSA/embed",

    "https://www.instagram.com/reel/DTk8NBdiHlv/embed",

    "https://www.instagram.com/reel/DSpzrsnCJXv/embed",

    "https://www.instagram.com/reel/DPJs9Vxkibo/embed",

    "https://www.instagram.com/reel/DWWqv1HIvrD/embed",

    "https://www.instagram.com/reel/DWSt2blyAgL/embed",

    "https://www.instagram.com/reel/DW6pvc4ocdE/embed",

    "https://www.instagram.com/reel/DPWjEm_iF61/embed",

    "https://www.instagram.com/reel/DQcNG-vCOgp/embed",

  ];

  const [currentReel, setCurrentReel] =
    useState(0);

  /* Next Reel */

  const nextReel = () => {

    setCurrentReel((prev) =>

      prev === reels.length - 1
        ? 0
        : prev + 1

    );

  };

  /* Prev Reel */

  const prevReel = () => {

    setCurrentReel((prev) =>

      prev === 0
        ? reels.length - 1
        : prev - 1

    );

  };

  return (

    <section
      id="reels"
      className="reels-section py-5"
    >

      <div className="container">

        <div className="row align-items-center g-5">

          {/* LEFT CONTENT */}

          <div className="col-lg-5">

            <div className="reels-left-content">

              {/* Badge */}

              <span className="reels-badge">

                <i className="fab fa-instagram me-2"></i>

                Official Instagram Page

              </span>

              {/* Title */}

              <h2 className="reels-title mt-4">

                आपले भाडळे
                <br />

                Instagram Reels

              </h2>

              {/* Description */}

              <p className="reels-desc">

                गावातील सुंदर दृश्य,
                सण-उत्सव, परंपरा,
                निसर्ग आणि खास क्षण
                आता Reels मधून अनुभव करा.

              </p>

              {/* Features */}

              <div className="reels-features">

                <div className="reels-feature">

                  <i className="fas fa-camera-retro"></i>

                  <span>
                    Village Lifestyle
                  </span>

                </div>

                <div className="reels-feature">

                  <i className="fas fa-mountain"></i>

                  <span>
                    Natural Beauty
                  </span>

                </div>

                <div className="reels-feature">

                  <i className="fas fa-heart"></i>

                  <span>
                    Culture & Memories
                  </span>

                </div>

              </div>

              {/* Instagram Button */}

              <a
                href="https://www.instagram.com/_apal_bhadale_?igsh=MzVubnpnY2Q0OXdl"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary reels-btn mt-4"
              >

                <i className="fab fa-instagram me-2"></i>

                @_apal_bhadale_

              </a>

            </div>

          </div>

          {/* RIGHT REEL VIEWER */}

          <div className="col-lg-7">

            <div className="reel-viewer">

              {/* Prev Button */}

              <button
                className="reel-arrow left-reel"
                onClick={prevReel}
              >

                ❮

              </button>

              {/* Reel */}

              <iframe
                key={currentReel}
                src={reels[currentReel]}
                className="reel-frame"
                allowTransparency="true"
                allowFullScreen="true"
                frameBorder="0"
                scrolling="no"
                title="Instagram Reel"
              ></iframe>

              {/* Next Button */}

              <button
                className="reel-arrow right-reel"
                onClick={nextReel}
              >

                ❯

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default ReelsSection;