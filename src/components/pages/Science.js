import React from "react";
import "../styles/main.scss";
import { Link } from "react-router-dom";

import ArticlePhoto1 from "../../assets/articles/Science - article1.PNG";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Science() {
  return (
    <>
      <div className="science">
        {/* <h2>Science</h2> */}

        {/* <div className="d-grid m-auto h-100"> */}
        <div className="container">
          <div className="row ">
            <div className="card-deck justify-content-center">
              <Link
                to="/science/article"
                // className="article-card__Society"
                className="col-md-5 text-dark"
              >
                <div className="card ">
                  <img
                    src={ArticlePhoto1}
                    alt="SocietyPhoto"
                    className="card-img-top img-fluid d-none d-md-block"
                  />
                  <div className="card-body">
                    <h3 className="card-title text-center ">
                      The application of deer antler stem cells in medicine and
                      cosmetology.
                    </h3>
                    <p className="card-text"></p>
                  </div>
                  <button className="btn btn-success rounded-0 d-none d-md-block">
                    Article
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
