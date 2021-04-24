import React from "react";
import "../styles/main.scss";
import { Button } from "../Button";

export default function Home() {
  return (
    <>
      <h1 className="home">
        <aside className="home__article">
          <article className="home__article__home">
            {" "}
            ANIMAL'S NATURE ORGANIZATION NON-PROFIT If you care about animals –
            join ANON Society, click Membership to see how :)
          </article>

          <input
            className="home__article-input"
            type="email"
            placeholder="your-email@domain.pl"
          />
          <Button />
        </aside>
      </h1>
    </>
  );
}
