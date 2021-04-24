import React from "react";
import "../styles/main.scss";
// import Form from "./ContactForm/Form";

import FormSignUp from "../FormSignUp";
import FormSuccess from "../FormSuccess";
import "../FormSignUp.scss";

export default function ContactUs({ isSubmitted, submitForm }) {
  console.log(isSubmitted);
  return (
    <>
      <section className="contact-us">
        <div className="form-container">
          <span className="close-btn">x</span>

          {!isSubmitted ? (
            <FormSignUp submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </div>
      </section>
    </>
  );
}
