import { useState } from "react";

import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./FormSignUp.scss";

import contactUsLeftPicture from "../images/web/WEB-ContactUS-left-picture.jpg";
import contactUsLeftPictureSucceed from "../images/web/WEB-ContactUs-left-succeed-picture.jpg";

export default function FormSignUp() {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

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
        <form className="form" onSubmit={handleSubmit}>
          <h1>Contact us!!</h1>
          <div className="form-inputs">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
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
            Sign Up!
          </button>
        </form>
      </div>
    </>
  );
}
