import React from "react";

export default function Footer({
  addressIcon,
  addressAlt,
  address,
  numberIcon,
  numberAlt,
  number,
  mailIcon,
  mailAlt,
  mail,
}) {
  return (
    <footer className="footer">
      <a href="" className="logoFooter">
        <img className="logoImg" src="/assets/logo.svg" alt="Fylo logo" />
      </a>
      <div className="contact">
        <img className="footerIcon" src={addressIcon} alt={addressAlt} />
        <p className="addressTxt">{address}</p>
      </div>
      <div className="footerContact">
        <div className="contact">
          <img className="footerIcon" src={numberIcon} alt={numberAlt} />
          <p className="contactTxt">{number}</p>
        </div>
        <div className="contact">
          <img className="footerIcon" src={mailIcon} alt={mailAlt} />
          <p className="contactTxt">{mail}</p>
        </div>
      </div>
      <div className="footerLinks">
        <a href="">About Us</a>
        <a href="">Jobs</a>
        <a href="">Press</a>
        <a href="">Blog</a>
      </div>
      <div className="footerLinks">
        <a href="">Contact Us</a>
        <a href="">Terms</a>
        <a href="">Privacy</a>
      </div>
      <div className="footerSocials">
        <a className="social" href="">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a className="social" href="">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a className="social" href="">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}
