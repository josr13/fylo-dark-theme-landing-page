import React from "react";

export default function Hero({ src, alt, heading, body, cta }) {
  return (
    <main>
      <img className="heroImg" src={src} alt={alt} />
      <div className="heroDesc">
        <h1>{heading}</h1>
        <p>{body}</p>
        <button className="cta">{cta}</button>
      </div>
    </main>
  );
}
