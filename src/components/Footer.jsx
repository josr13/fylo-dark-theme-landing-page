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
    <footer>
      <a href="" className="logoLink">
        <img className="logo" src="/assets/logo.svg" alt="Fylo logo" />
      </a>
      <div className="footerAddress">
        <img className="addressImg" src={addressIcon} alt={addressAlt} />
        <p className="addressTxt">{address}</p>
      </div>
      <div className="footerContact">
        <div className="footerNumber">
          <img className="numberImg" src={numberIcon} alt={numberAlt} />
          <p className="numberTxt">{number}</p>
        </div>
        <div className="footerMail">
          <img className="mailImg" src={mailIcon} alt={mailAlt} />
          <p className="mailTxt">{mail}</p>
        </div>
      </div>
      <div className="footerLinks1">
        <a href="">About Us</a>
        <a href="">Jobs</a>
        <a href="">Press</a>
        <a href="">Blog</a>
      </div>
      <div className="footerLinks2">
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
