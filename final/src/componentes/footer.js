import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "+57 123 456 789";

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3 className="taller-name">Taller M&A</h3>
          <p className="date">Fecha: {currentYear}</p>
          <p className="phone">Teléfono: {phoneNumber}</p>
          <p className="copyriath">
            &copy; {currentYear} Taller M&A. Todos los derechos reservados.
          </p>
          <ul className="social-icon">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
