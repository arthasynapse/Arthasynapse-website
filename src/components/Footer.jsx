import "../styles/footer.css";
import gmailIcon from "../assets/icons/gmail.png";
import locationIcon from "../assets/icons/location.png";
import whatsappIcon from "../assets/icons/whatsapp.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Arthasynapse</h3>
            <p className="footer-tagline">
              Connecting Stories. Sparking Minds.
            </p>
            {/* <p className="footer-description">
              A next-generation publication and media company dedicated to highlighting the achievements, journeys, and
              insights of changemakers across diverse fields.
            </p> */}
          </div>

          <div className="footer-section">
            {/* <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/magazines">Magazines</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul> */}
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li>Print & Digital Magazine Publishing</li>
              <li>Feature Interviews</li>
              <li>Brand Storytelling</li>
              <li>Content Strategy</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>
                <img
                  src={locationIcon}
                  alt="Location"
                  className="contact-icon"
                />
                New Delhi, India
              </p>
              <p>
                <img src={gmailIcon} alt="Email" className="contact-icon" />
                Arthasynapse@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Arthasynapse. All rights reserved.</p>
          <div className="social-links">
            <a
              href="https://www.instagram.com/arthasynapse?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
