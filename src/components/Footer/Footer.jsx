import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/services">Our Services</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/appointments">Book Appointment</Link>
              </li>
            </ul>
          </div>

          {/* Dental Services */}
          <div className="footer-section">
            <h3>Dental Services</h3>
            <ul>
              <li>
                <Link to="/">Root Canal</Link>
              </li>
              <li>
                <Link to="/aboutus">Dental Braces</Link>
              </li>
              <li>
                <Link to="/services">Ceramic Crowns</Link>
              </li>
              <li>
                <Link to="/contactus">Dental Implants</Link>
              </li>
              <li>
                <Link to="/appointments">Clear Braces</Link>
              </li>
              <li>
                <Link to="/appointments">Child Dental Care</Link>
              </li>
              <li>
                <Link to="/appointments">Smile Designing</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section ">
            <h3>Contact Us</h3>
            <p>
              <FaLocationDot className="contact-icon" />1st Line Pandaripuram,
              Chilakaluripet, Andhra Pradesh - 522616
            </p>
            <p>
              <FaPhoneAlt className="contact-icon" />+91-98660 22559
            </p>
            <p>
              <MdEmail className="contact-icon" />admin@sanjittechsolutions.in
            </p>
            <h4 className="footer-subheading">Working Hours</h4>
            <p>
              <IoMdTime className="contact-icon" />Mon - Fri: 9:00 AM - 7:00 PM
            </p>
            <p>
              <IoMdTime className="contact-icon" />Sat - Sun: 10:00 AM - 5:00
              PM
            </p>
          </div>

          {/* Google Map */}
         {/* Google Map */}
         <div className="footer-section footer-map">
  <a
    href="https://www.google.com/maps/dir/?api=1&destination=16.09329,80.16461"
    target="_blank"
    rel="noopener noreferrer"
    style={{ display: "block", width: "100%", height: "100%" }}
  >
    <iframe
      title="Vishnu Dental Clinic Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.4665718290553!2d80.1645569!3d16.0931475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a634218289933%3A0x5be23878993f93af!2sVishnu%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1743588674243!5m2!1sen!2sin"
      allowFullScreen=""
      loading="preload"
      className="map-iframe"
      style={{ pointerEvents: "none" }}
    ></iframe>
  </a>
</div>


        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Vishnu Dental Clinic. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
