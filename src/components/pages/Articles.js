import React from "react";
import "../styles/main.scss";
import ArticlesCards from "../ArticlesCards";
import CardDeck from "../CardDeck";

export default function Articles() {
  return (
    <>
      <div className="articles">
        {/*<ArticlesCards />*/}
        {/* <p>Articles</p> */}
          <CardDeck/>
      </div>
    </>
  );
}
