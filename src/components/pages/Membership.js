import React from "react";
import "../../App.scss";
// import MembershipForm from "../MembershipForm";
import MembershipFormGoogle from "../MembershipFormGoogle";

export default function MembershipMenu() {
  return (
    <>
      <div className="membership">
        <div className="container  about__creator__right">
          <h5 className="text-center mt-md-2 mt-5">Anon Documents:</h5>
          <div className="row">
            <a
              className="col-4 text-center"
              href="../../assets/Membership/ANON STATUTE.pdf"
              download
            >
              Anon Statute
            </a>
            <a
              className="col-4 text-center"
              href="../../assets/Membership/ANON STATUTE.pdf"
              download
            >
              Anon Statute
            </a>
            <a
              className="col-4 text-center"
              href="../../assets/Membership/ANON STATUTE.pdf"
              download
            >
              Anon Statute
            </a>
          </div>
        </div>

        {/* <MembershipForm /> */}
        <MembershipFormGoogle />
      </div>
    </>
  );
}
