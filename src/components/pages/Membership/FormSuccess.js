import React from "react";
import FormLeftSucceedImage from "../../../images/web/WEB-ContactUs-left-succeed-picture.jpg";

const FormSuccess = () => {
  return (
    <div className="form-content-right">
      <div className="form-success">We have your request!! </div>
      <img src={FormLeftSucceedImage} alt="form-success" className="form-img" />
    </div>
  );
};

export default FormSuccess;
