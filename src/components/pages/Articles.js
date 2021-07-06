import React from "react";
import "../styles/main.scss";
import ArticlesCards from "../ArticlesCards";

export default function Articles() {
  return (
    <>
      <div className="articles">
        <ArticlesCards />
        {/* <p>Articles</p> */}
      </div>
    </>
  );
}
