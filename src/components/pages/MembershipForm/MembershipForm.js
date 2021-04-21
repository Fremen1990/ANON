import { useState } from "react";
import FormSignUp from "./FormSignUp";
import FormSuccess from "./FormSuccess";
import "./Form.css";
import contactUsLeftPicture from "../../../images/web/WEB-ContactUS-left-picture.jpg";

const MembershipForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="form-container">
        <span className="close-btn">x</span>

        {/* <div className="form-content-left"></div> */}
        {!isSubmitted ? (
          <FormSignUp submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default MembershipForm;
