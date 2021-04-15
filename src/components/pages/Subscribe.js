import React from "react";
import "../../App.css";

export default function Subscribe() {
  return (
    <>
      <h1 className="subscribe">
        <p>Subscribe</p>
        <form className="subscribe__form" action="submit">
          <input
            placeholder="your_email@domain.com"
            className="subscribe__form__input"
            type="text"
          />
          <button>Subscibe now!</button>
        </form>
      </h1>
    </>
  );
}
