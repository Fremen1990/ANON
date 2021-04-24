import React from "react";
import "../../App.css";
// import MembershipForm from "../MembershipForm";
import MembershipFormGoogle from "../MembershipFormGoogle";

export default function MembershipMenu() {
  return (
    <>
      <h1 className="membership">
        {/* <MembershipForm /> */}
        <MembershipFormGoogle />
      </h1>
    </>
  );
}
