import React from "react";

export default function Features({ icon, alt, heading, body }) {
  return (
    <article className="feat">
      <img className="featIcon" src={icon} alt={alt} />
      <h2 className="featHeading">{heading}</h2>
      <p className="featBody">{body}</p>
    </article>
  );
}
