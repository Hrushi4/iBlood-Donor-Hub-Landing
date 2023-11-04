import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About iBlood Donor Hub</span>
        </h3>
        <p className="about-description">
          Welcome to iBlood Donor Hub, your trusted partner for efficient blood
          management and lifesaving contributions. Our platform connects
          multiple blood banks, donors, and hospitals, prioritizing the
          availability and safety of this precious resource. Join us on this
          journey towards healthier communities.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Connect with our Blood Network"
          description="Find your perfect match for blood donation and manage your donations with ease. We prioritize efficient blood management and the well-being of both donors and recipients."
        />

        <SolutionStep
          title="Schedule Blood Drives"
          description="Choose the date and time that suits your organization best, and let our dedicated team ensure the success of your blood drives, supporting a consistent supply of blood."
        />

        <SolutionStep
          title="Manage Your Blood Health"
          description="Our platform provides a comprehensive solution for tracking your donation history and ensuring the safety and availability of blood. We're here to help you make a significant impact on public health."
        />
      </div>
    </div>
  );
}

export default About;
