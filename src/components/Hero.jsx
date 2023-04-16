import React from "react";

export default function Hero() {
  return (
    <main>
      <img
        className="heroImg"
        src="src/assets/illustration-intro.png"
        alt="Hero image"
      />
      <div className="heroDesc">
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="cta">Get Started</button>
      </div>
    </main>
  );
}
