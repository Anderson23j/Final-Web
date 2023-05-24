import React from "react";
/* import "../styles/footer.css"; */
import "../styles/footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>{`Copyright © Taller M&A ${year}`}</footer>
    </>
  );
};

export default Footer;
