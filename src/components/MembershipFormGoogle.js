import React from "react";
import "./MembershipForm.scss";
// import "../../App.css";

export default function MembershipFromGoogle() {
  return (
    <>
      <iframe
        className="MembershipFormGoogle"
        src="https://docs.google.com/forms/d/e/1FAIpQLScQ3A8Zjq5Ha56_M5oWSMFhsjjx8_M_lfZ35KR95vpvZjV4SQ/viewform?embedded=true"
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Ładuję…
      </iframe>
    </>
  );
}
