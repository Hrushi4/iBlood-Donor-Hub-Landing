import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    const newTabUrl = "https://iblood-donor-hub.onrender.com/login";

    window.open(newTabUrl, "_blank");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">❤️ Saving Lives Together</p>
          <h2 className="text-title">Efficient Blood Management Platform</h2>
          <p className="text-descritpion">
            Connect with multiple blood banks, donors, and hospitals on a single
            platform. Streamline blood inventory, donation history, and
            consumption data effortlessly.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Join Our Network
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>145k+</p>
              <p>Serving Patients</p>
            </div>

            <div className="text-stats-container">
              <p>50+</p>
              <p>Collaborating with Blood Banks</p>
            </div>

            <div className="text-stats-container">
              <p>10+ Years</p>
              <p>Supporting of Lifesaving Operations</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
