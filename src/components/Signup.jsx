import React, { useState } from "react";

export default function Signup({ header, body, input, button }) {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setIsValidEmail(validateEmail(inputValue));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

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
        value={email}
        onChange={handleChange}
      />
      {!isValidEmail && email !== "" && (
        <p className="error">Please enter a valid email address</p>
      )}
      <button className="signupBtn" type="submit">
        {button}
      </button>
    </section>
  );
}
