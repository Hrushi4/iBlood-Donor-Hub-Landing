import React from "react";
import InformationCard from "./InformationCard";
import {
  faHeartPulse,
  faTruckMedical,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We simplify blood management, offering a comprehensive platform to
          meet your needs. Our application connects multiple blood banks,
          donors, and hospitals, allowing for seamless blood inventory
          management, donor history tracking, and consumption data for
          hospitals.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Efficient Blood Management"
          description="We understand the critical nature of blood supply. Our platform is designed to be your reliable support in blood inventory management, connecting multiple blood banks, donors, and hospitals. Whether it's ensuring a stable supply, tracking donor history, or managing hospital consumption, our dedicated team is available around the clock to provide prompt and efficient blood management."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Blood Health"
          description="Our commitment to blood health is unwavering. We collaborate with a network of blood banks, donors, and hospitals, employing advanced technology to ensure the safety and availability of this life-saving resource. From efficient inventory tracking to timely replenishments, we are dedicated to supporting healthy communities."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Donor Care"
          description="We value our donors and their life-saving contributions. Our platform facilitates easy tracking of donation history, making it simple for donors to view their impact. Whether you're an individual or part of a larger organization, we're here to ensure your generosity counts."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
