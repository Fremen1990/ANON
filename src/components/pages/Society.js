import React from "react";

import { Link } from "react-router-dom";

import "../styles/main.scss";

import ArticlePhoto from "../../assets/articles/Society-article1.PNG";

export default function Society() {
  return (
    <>
      <div className="society">
        {/* <h2>Society</h2> */}

        <div className="container">
          {/* <div className="row justify-content-center"> */}
          <div className="card-deck  justify-content-center">
            <Link
              to="/society/article"
              // className="article-card__Society"
              className="col-md-4 text-dark"
            >
              <div className="card">
                <img
                  src={ArticlePhoto}
                  alt="SocietyPhoto"
                  className="card-img-top img-fluid d-none d-md-block"
                />
                <div className="card-body">
                  <h3 className="card-title text-center ">
                    The history of founding of ANON.
                  </h3>
                  <p className="card-text"></p>
                </div>
                <button className="btn btn-success rounded-0 d-none d-md-block">
                  Article
                </button>
              </div>
            </Link>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
