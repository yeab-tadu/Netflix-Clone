import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row">
          <div className="footer-column">
            <h4>Questions? Contact us.</h4>
            <ul>
              <li>
                <p href="/" className="footer-link">
                  FAQ
                </p>
              </li>
              <li>
                <p href="/" className="footer-link">
                  Help Center
                </p>
              </li>
              <li>
                <p href="/" className="footer-link">
                  Account
                </p>
              </li>
              <li>
                <p href="/" className="footer-link">
                  Media Center
                </p>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="footer-column">
            <h4>Netflix Services</h4>
            <ul>
              <li>
                <p href="/" className="footer-link">
                  Netflix Originals
                </p>
              </li>
              <li>
                <p href="/" className="footer-link">
                  Movies
                </p>
              </li>
              <li>
                <p href="/" className="footer-link">
                  TV Shows
                </p>
              </li>
              <li>
                <p href="/" className="footer-link">
                  Documentaries
                </p>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="footer-column">
            <h4>Help</h4>
            <ul>
              <li>
                <p href="/" className="footer-link">
                  Account
                </p>
              </li>
              <li>
                <p href="/" className="footer-link">
                  Redeem Gift Cards
                </p>
              </li>
              <li>
                <p href="/" className="footer-link">
                  Privacy
                </p>
              </li>
              <li>
                <p href="/" className="footer-link">
                  Terms of Use
                </p>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="footer-column">
            <h4>Follow Netflix</h4>
            <ul>
              <li>
                <p href="/" className="footer-link">
                  Facebook
                </p>
              </li>
              <li>
                <p href="/" className="footer-link">
                  Twitter
                </p>
              </li>
              <li>
                <p href="/" className="footer-link">
                  Instagram
                </p>
              </li>
              <li>
                <p href="/" className="footer-link">
                  YouTube
                </p>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="row">
          <p className="footer-text">Netflix United States</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
