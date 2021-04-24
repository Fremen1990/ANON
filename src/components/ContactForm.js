// import { useState } from "react";

import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./ContactForm.scss";

import contactUsLeftPicture from "../images/web/WEB-ContactUS-left-picture.jpg";
import contactUsLeftPictureSucceed from "../images/web/WEB-ContactUs-left-succeed-picture.jpg";

export default function ContactForm({ submitForm, isSubmitted }) {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <>
      <div className="form-content-left">
        {!isSubmitted ? (
          <img
            src={contactUsLeftPicture}
            alt="spaceship"
            className="form-img"
          />
        ) : (
          <img
            src={contactUsLeftPictureSucceed}
            alt="Form succeed"
            className="form-img"
          />
        )}
      </div>

      <div className="form-content-right">
        <iframe
          className="contactFormGoogle"
          src="https://docs.google.com/forms/d/e/1FAIpQLSepyxTr0f09xKPBNDl6XMlvQJ-HGO7HNll89AcmVIHw59fgLQ/viewform?embedded=true"
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Ładuję…
        </iframe>

        {/* <form
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSepyxTr0f09xKPBNDl6XMlvQJ-HGO7HNll89AcmVIHw59fgLQ/formResponse?edit2=2_ABaOnudsN9CtHlNqqyP76ArJs3sJgYcBq4W4lllCZytyctu1xExTtpUyEJ1g6z_jhQ"
          target="_self"
          method="POST"
          id="mG61Hd"
          className="form"
          onSubmit={handleSubmit}
        >
          <h1>Contact us!!</h1>
          <div className="form-inputs">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              jsname="YPqjbf"
              id="name"
              type="text"
              className="form-input"
              name="name"
              placeholder="Enter your name"
              value={values.name}
              onChange={handleChange}
            />

            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              jsname="YPqjbf"
              id="email"
              type="email"
              className="form-input"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="message" className="form-label">
              Message:
            </label>

            <textarea
              className="form-input-message"
              jsname="YPqjbf"
              name="message"
              id="message"
              placeholder="Enter your message"
              value={values.message}
              onChange={handleChange}
              cols="30"
              rows="10"
            ></textarea>

            {errors.message && (
              <p className="error-message">{errors.message}</p>
            )}
          </div>
          <button className="form-input-btn" type="submit">
            Send
          </button>
        </form> */}
      </div>
    </>
  );
}
