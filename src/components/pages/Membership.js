import React from "react";
import "../../App.scss";
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
