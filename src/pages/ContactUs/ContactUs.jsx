import React, { useState } from "react";
import "./ContactUs.css";
import contactUs from "../../assets/Images/ContactUsPage/contact_us.jpg"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("YOUR_GOOGLE_SCRIPT_URL", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={contactUs} alt="Contact Banner" className="hero-image" />
      </section>

     {/* Contact Form Section with Background */}
     <section className="contact-form-bg">
        <div className="contact-form-section">
          <h2>Book an appointment</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="patientName"
              placeholder="Patient Name"
              required
              value={formData.patientName}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              required
              pattern="[0-9]{10}"
              value={formData.mobile}
              onChange={handleChange}
            />
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
            />
            <select
              name="serviceType"
              required
              value={formData.serviceType}
              onChange={handleChange}
            >
              <option value="">Select Type of Service</option>
              <option value="Root Canal">Root Canal</option>
              <option value="Dental Braces">Dental Braces</option>
              <option value="Ceramic Crowns">Ceramic Crowns</option>
              <option value="Dental Implants">Dental Implants</option>
              <option value="Clear Braces">Clear Braces</option>
              <option value="Child Dental Care">Child Dental Care</option>
              <option value="Smile Designing">Smile Designing</option>
            </select>
            <textarea
              name="description"
              placeholder="Description"
              rows="5"
              required
              value={formData.description}
              onChange={handleChange}
            />
            <button type="submit">Send Message</button>
          </form>

          {submitted && (
            <p className="success-message">Message sent successfully!</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
