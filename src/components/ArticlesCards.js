import React from "react";
import "./ArticlesCards.scss";
import SocietyPhoto from "../assets/articles/Society.jpg";
import SciencePhoto from "../assets/articles/Science.jpg";
import CriminalPhoto from "../assets/articles/Criminal.jpg";

import { Link } from "react-router-dom";

export default function ArticlesCard() {
  return (
    <>
      <div className="site-container">
        <Link to="/society" className="article-card__Society">
          <article className="article-card__Society">
            <figure className="article-image">
              <img src={SocietyPhoto} />
            </figure>
            <div className="article-content">
              <h2 className="card-category">Society</h2>
              <h3 className="class-title">Dogs life in herds</h3>
              <p className="card-excerpt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                gravida vulputate mauris, ac
              </p>
            </div>
          </article>
        </Link>

        <Link to="/science" className="article-card__Science">
          <article className="article-card__Science">
            <figure className="article-image">
              <img src={SciencePhoto} alt="Science" />
            </figure>
            <div className="article-content">
              <h2 className="card-category">Science</h2>
              <h3 className="class-title">Monkey Planet</h3>
              <p className="card-excerpt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                gravida vulputate mauris, ac
              </p>
            </div>
          </article>
        </Link>

        <Link to="/criminal" className="article-card__Criminal">
          <article className="article-card__Criminal">
            <figure className="article-image">
              <img src={CriminalPhoto} alt="Criminal" />
            </figure>
            <div className="article-content">
              <h2 className="card-category">Criminal</h2>
              <h3 className="class-title">Rescue the Whale</h3>
              <p className="card-excerpt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                gravida vulputate mauris, ac
              </p>
            </div>
          </article>
        </Link>
      </div>
    </>
  );
}
