"use client";

import { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! We'll respond shortly.");
    console.log("Form Submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            We're here to help — reach out with any queries or suggestions.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section contact-content">
        <div className="container contact-grid">
          {/* Left: Info */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p className="contact-intro">We're available via the following:</p>
            <div className="contact-details">
              {[
                { icon: "📍", label: "Location", value: "New Delhi, India" },
                { icon: "📧", label: "Email", value: "Arthasynapse@gmail.com" },
                { icon: "📞", label: "Phone", value: "9211263297" },
                { icon: "📱", label: "Instagram", value: "@Arthasynapse" },
              ].map(({ icon, label, value }) => (
                <div className="contact-item" key={label}>
                  <div className="contact-icon">{icon}</div>
                  <div className="contact-text">
                    <h3>{label}</h3>
                    <p>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-container">
            <h2>Send a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              {[
                { label: "Full Name", name: "name", type: "text", placeholder: "Your name" },
                { label: "Email", name: "email", type: "email", placeholder: "you@example.com" },
                { label: "Subject", name: "subject", type: "text", placeholder: "Reason for contact" },
              ].map(({ label, name, type, placeholder }) => (
                <div className="form-group" key={name}>
                  <label htmlFor={name}>{label} *</label>
                  <input
                    type={type}
                    id={name}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    required
                    placeholder={placeholder}
                  />
                </div>
              ))}

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Describe your issue or suggestion..."
                ></textarea>
              </div>

              <button type="submit" className="btn submit-btn">Send</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
