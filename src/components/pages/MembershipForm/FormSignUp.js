import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";

const FormSignUp = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <>
      <header style={{ margin: 0, padding: 0, height: 100 }}>
        <h1 style={{ fontSize: 30 }}>ANON Membership</h1>

        <h3 style={{ fontSize: 14 }}>
          Please, answear for a few questions to let us know you better. We will
          response you ASAP.
        </h3>

        <h3 style={{ fontSize: 12, margin: 10 }}>
          Please read Mission and Structure as well:{" "}
          <a href="../../../assets/anon_missionstructure_2021.pdf" download>
            Click to download
          </a>
        </h3>
      </header>

      <div className="form-content-left">
        <div className="form-inputs">
          <h3 style={{ fontSize: 14 }}> What would you like to do?</h3>
          <label className="form-label">
            Writing an articles <input type="checkbox" className="form-input" />
          </label>

          <label className="form-label">
            making an investigations{" "}
            <input type="checkbox" className="form-input" />
          </label>

          <label className="form-label">
            helping with organize events/conferencess online{" "}
            <input type="checkbox" className="form-input" />
          </label>

          <label className="form-label">
            making a relationships with partners{" "}
            <input type="checkbox" className="form-input" />
          </label>

          <label className="form-label">
            inviting people to ANON website{" "}
            <input type="checkbox" className="form-input" />
          </label>

          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
      </div>

      <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit}>
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
              How did you find us:
            </label>

            <textarea
              style={{ height: 50 }}
              className="form-input-message"
              name="message"
              id="message"
              placeholder="Enter your story"
              value={values.message}
              onChange={handleChange}
              cols="30"
              rows="10"
            ></textarea>

            {errors.message && (
              <p className="error-message">{errors.message}</p>
            )}
          </div>

          <div className="form-inputs">
            <label htmlFor="message" className="form-label">
              Why do you want to be in ANON?
            </label>

            <textarea
              style={{ height: 50 }}
              className="form-input-message"
              name="message"
              id="message"
              placeholder="Tell me why..."
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
};

export default FormSignUp;
