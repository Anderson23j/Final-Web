import React from "react";
/* import "../styles/footer.css"; */

function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>{`Copyright © Taller M&A ${year}`}</footer>
    </>
  );
}

export default Footer;
