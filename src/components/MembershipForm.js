import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./MembershipForm.scss";

const FormSignUp = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <>
      <div className="membership-form-container">
        <header className="form-containter__header">
          <h1 className="form-containter__h1">ANON Membership</h1>

          <h3 className="form-containter__h3">
            Please, answear for a few questions to let us know you better. We
            will response you ASAP.
          </h3>

          <h3 className="form-containter__h3">
            Please read Mission and Structure as well:{" "}
            <a
              className="form-container__download"
              href="../../../assets/anon_missionstructure_2021.pdf"
              download
            >
              Click to download
            </a>
          </h3>
        </header>

        <form className="form-container__form" onSubmit={handleSubmit}>
          <div className="form-container__left-form">
            <div className="form-container__form-inputs">
              <label htmlFor="email" className="form-label">
                Adres e-mail:
              </label>
              <input
                className="form-container__input"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            <div className="form-container__form-inputs">
              <label htmlFor="message" className="form-label">
                How did you find us:
              </label>

              <textarea
                style={{ height: 50 }}
                className="form-container__form-input-message"
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

            <div className="form-container__form-inputs">
              <label htmlFor="message" className="form-label">
                Why do you want to be in ANON?
              </label>

              <textarea
                style={{ height: 50 }}
                className="form-container__form-input-message"
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
          </div>

          <div className="form-container__right-form">
            <div className="form-container__form-inputs">
              <h2>What would you like to do? </h2>
              <input
                className="form-container__input"
                // id="email"
                type="checkbox"
                // name="email"
                // placeholder="Enter your email"
                // value={values.email}
                // onChange={handleChange}
              />
              <label htmlFor="email" className="form-label">
                writing an articles
              </label>

              <input
                className="form-container__input"
                // id="email"
                type="checkbox"
                // name="email"
                // placeholder="Enter your email"
                // value={values.email}
                // onChange={handleChange}
              />
              <label htmlFor="email" className="form-label">
                making an investigations
              </label>

              <input
                className="form-container__input"
                // id="email"
                type="checkbox"
                // name="email"
                // placeholder="Enter your email"
                // value={values.email}
                // onChange={handleChange}
              />
              <label htmlFor="email" className="form-label">
                helping with organize events/conferencess online{" "}
              </label>

              <input
                className="form-container__input"
                // id="email"
                type="checkbox"
                // name="email"
                // placeholder="Enter your email"
                // value={values.email}
                // onChange={handleChange}
              />
              <label htmlFor="email" className="form-label">
                making a relationships with partners
              </label>

              <input
                className="form-container__input"
                // id="email"
                type="checkbox"
                // name="email"
                // placeholder="Enter your email"
                // value={values.email}
                // onChange={handleChange}
              />
              <label htmlFor="email" className="form-label">
                inviting people to ANON website
              </label>
            </div>
            <button className="form-input-btn" type="submit">
              Sign Up!
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormSignUp;
