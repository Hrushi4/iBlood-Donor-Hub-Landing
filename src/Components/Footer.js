import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">iBlood Donor Hub</p>
            <p className="ft-description">
              Discover our commitment to saving lives. We are a trusted blood
              bank dedicated to collecting, testing, and distributing
              life-saving blood products. Learn more about our mission and
              values.
            </p>
          </div>

          <SubscribeNewsletter />
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Services</p>
          <ul className="ft-list-items">
            <li>
              <a href="#services">Schedule an Appointment</a>
            </li>
            <li>
              <a href="#services">Eligibility Requirements</a>
            </li>
            <li>
              <a href="#services">Testimonials</a>
            </li>
            <li>
              <a href="#services">Organize a Blood Drive</a>
            </li>
            <li>
              <a href="#services">Volunteer Opportunities</a>
            </li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li>
              <Link to={"/legal"}>General Info</Link>
            </li>
            <li>
              <Link to={"/legal"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/legal"}>Terms of Services</Link>
            </li>
            <li>
              <Link to={"/legal"}>How it Works</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:support@iBloodDonorHub.com">
                support@iBloodDonorHub.com
              </a>
            </li>
            <li>
              <a href="mailto:appointment@iBloodDonorHub.com">
                appointment@iBloodDonorHub.com
              </a>
            </li>
            <li>
              <a href="tel:+022 5454 5252">+022 5454 5252</a>
            </li>
            <li>
              <a href="tel:+022 2326 6232">+022 2326 6232</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© 2022-2023 iBlood Donor Hub. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
