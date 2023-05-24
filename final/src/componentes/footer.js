import React, { useEffect } from "react";
import "../styles/footer.css";

const Footer = () => {
  useEffect(() => {
    const footer = document.querySelector("footer");
    footer.classList.add("footer-animation");
  }, []);

  return (
    <footer>
      <div className="footer-content">
        <p className="p-footer">© 2023 Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
