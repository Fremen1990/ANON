import React from "react";
import "../styles/main.scss";
import { Button } from "../Button";
import { QRCode } from "../QRCode";

export default function Home() {
  return (
    <>
      <div className="container home">
        <section className="home__article">
          <form action="submit" className="home__subscribeForm">
            <article className="home__article__text">
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
        </section>
        <QRCode />
      </div>
    </>
  );
}
