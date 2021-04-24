import React from "react";
import "../styles/main.scss";
import { Button } from "../Button";
import { QRCode } from "../QRCode";

export default function Home() {
  return (
    <>
      <h1 className="home">
        <aside className="home__article">
          <form action="submit" className="home__subscribeForm">
            <article className="home__article__home">
              {" "}
              ANIMAL'S NATURE ORGANIZATION NON-PROFIT If you care about animals
              subscribe . . .
            </article>
            <input
              className="home__article-input"
              type="email"
              placeholder="your-email@domain.pl"
            />
            <Button />
          </form>
        </aside>
        <QRCode />
      </h1>
    </>
  );
}
