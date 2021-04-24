import React from "react";
import "../styles/main.scss";
import ContactForm from "../ContactForm";
import FormSuccess from "../FormSuccess";
import "../ContactForm.scss";

export default function ContactUs({ isSubmitted, submitForm }) {
  console.log(isSubmitted);
  return (
    <>
      <section className="contact-us">
        <div className="form-container">
          <span className="close-btn">x</span>

          {!isSubmitted ? (
            <ContactForm submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </div>
      </section>
    </>
  );
}
