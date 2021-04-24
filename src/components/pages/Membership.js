import React from "react";
import "../../App.css";
import MembershipForm from "../MembershipForm";

export default function MembershipMenu() {
  return (
    <>
      <h1 className="membership">
        <MembershipForm />
        {/* <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScQ3A8Zjq5Ha56_M5oWSMFhsjjx8_M_lfZ35KR95vpvZjV4SQ/viewform?embedded=true"
          width="1100"
          height="800"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Ładuję…
        </iframe> */}
      </h1>
    </>
  );
}
