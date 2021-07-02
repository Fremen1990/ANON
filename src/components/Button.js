import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

export function Button() {
  return (
    <Link className="btn" to="subscribe">
      <button className="btn" type="submit">
        Subscribe!
      </button>
    </Link>
  );
}
