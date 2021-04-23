import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.scss";

const FormSignUp = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <>
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

            {/* <input
              id="password2"
              type="text"
              className="form-input-message"
              name="password2"
              placeholder="Enter your message"
              value={values.password2}
              onChange={handleChange}
            /> */}
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
};

export default FormSignUp;
