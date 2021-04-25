import React from "react";
import "../styles/main.scss";
import ArticlesCards from "../ArticlesCards";

export default function Articles() {
  return (
    <>
      <h1 className="articles">
        {/* <p>Articles</p> */}
        <ArticlesCards />
      </h1>
    </>
  );
}
