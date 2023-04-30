import React from "react";

export default function Info({ src, alt, heading, body1, body2, more }) {
  return (
    <section>
      <img className="heroImg" src={src} alt={alt} />
      <div className="infoDesc">
        <h1>{heading}</h1>
        <p>{body1}</p>
        <p>{body2}</p>
        <a className="infoMore" href="">
          {more}
        </a>
      </div>
    </section>
  );
}
