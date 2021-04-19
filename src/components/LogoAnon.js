import React from "react";
import "./Logo.css";
import logo from "../assets/ANON _ Edyta LOGO2 białe kółko - small.png";
import { Link } from "react-router-dom";

export function LogoAnon() {
  return (
    <Link to="/" className="logo">
      <img className="logo-img" src={logo} alt="Anon" />
    </Link>
  );
}
