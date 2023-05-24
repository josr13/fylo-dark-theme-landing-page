import React from "react";

export default function Testimonials({ quote, picture, customer, position }) {
  return (
    <article className="testim">
      <p className="testimQuote">{quote}</p>
      <div className="testimProfile">
        <img
          src={picture}
          alt={"Profile picture of " + customer}
          className="testimPicture"
        />
        <h6 className="testimCustomer">{customer}</h6>
        <p className="testimPosition">{position}</p>
      </div>
    </article>
  );
}
