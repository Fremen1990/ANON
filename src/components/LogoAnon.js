import React from "react";
import "./LogoAnon.scss";
import logo from "../assets/Logo_proper_one_ANON-small.png";
import { Link } from "react-router-dom";

export function LogoAnon() {
  return (
    <Link to="/" className="logo">
      <img className="logo-img" src={logo} alt="Anon" />
    </Link>
  );
}
