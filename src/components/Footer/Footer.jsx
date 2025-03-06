import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <p className="footer__name">Developed by Azat Manas</p>
      <p className="footer__year">{new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
