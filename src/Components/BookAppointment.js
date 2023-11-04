import React from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose iBlood Donor Hub</span>
        </h3>
        <p className="ba-description">
          Discover the reasons to choose iBlood Donor Hub for your blood
          management and donation needs. Experience efficient blood care, ease
          of use, and the opportunity to contribute to the well-being of your
          community. Join us on a journey to healthier, more vibrant
          communities.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#fd1e1a" }} />{" "}
          Extensive Blood Network
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#fd1e1a" }} />{" "}
          Efficient Blood Management
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#fd1e1a" }} />{" "}
          24/7 Support
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#fd1e1a" }} />{" "}
          Easy Enrollment
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Join Our Network
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
