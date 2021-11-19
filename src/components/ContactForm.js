import React from "react";
import "./ContactForm.scss";

export default function ContactForm() {

  return (
    <>
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

      </div>
    </>
  );
}
