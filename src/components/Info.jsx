import React from "react";

export default function Info({ src, alt, heading, body1, body2, more }) {
  return (
    <section className="infoWrapper">
      <img className="infoImg" src={src} alt={alt} />
      <div className="infoDesc">
        <h2 className="infoHeading">{heading}</h2>
        <p className="infoBody">{body1}</p>
        <p className="infoBody">{body2}</p>
        <a className="infoMore" href="">
          {more}
        </a>
      </div>
    </section>
  );
}
