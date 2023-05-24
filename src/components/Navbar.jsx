import React from "react";

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="" className="logoLink">
        <img className="logo" src="/assets/logo.svg" alt="Fylo logo" />
      </a>
      <ul className="navbar">
        <li>
          <a href="">Features</a>
        </li>
        <li>
          <a href="">Team</a>
        </li>
        <li>
          <a href="">Sign In</a>
        </li>
      </ul>
    </nav>
  );
}
