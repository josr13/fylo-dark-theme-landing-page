import React from "react";

export default function Signup({ header, body, input, button }) {
  return (
    <section className="signupWrapper">
      <div className="signupDesc">
        <h2 className="signupHeader">{header}</h2>
        <p className="signupBody">{body}</p>
      </div>
      <input
        className="signupEmail"
        type="email"
        name="email"
        placeholder={input}
      />
      <button className="signupBtn" type="submit">
        {button}
      </button>
    </section>
  );
}
