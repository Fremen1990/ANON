import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

export function Button() {
  return (
    <Link to="subscribe">
      <button className="btn">Subscribe!</button>
    </Link>
  );
}
