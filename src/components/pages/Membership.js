import React from "react";
import "../../App.css";
import MembershipForm from "./MembershipForm/MembershipForm";

export default function Membership() {
  return (
    <>
      <h1 className="membership">
        <MembershipForm />
      </h1>
    </>
  );
}
