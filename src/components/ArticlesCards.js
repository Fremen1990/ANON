import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import "./ArticlesCards.scss";
import SocietyPhoto from "../assets/articles/Society.jpg";
import SciencePhoto from "../assets/articles/Science.jpg";
import CriminalPhoto from "../assets/articles/Criminal.jpg";

import { Link } from "react-router-dom";

export default function ArticlesCard() {
  return (
    <>
      {/* <div className="d-grid m-auto h-100"> */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="card-deck">
            <Link
              to="/society"
              // className="article-card__Society"
              className="col-md-4 text-dark"
            >
              <div className="card">
                <img
                  src={SocietyPhoto}
                  alt="SocietyPhoto"
                  className="card-img-top img-fluid d-none d-md-block"
                />
                <div className="card-body">
                  <h3 className="card-title text-center ">Society</h3>
                  <p className="card-text"></p>
                </div>
                <button className="btn btn-success rounded-0 d-none d-md-block">
                  Articles
                </button>
              </div>
            </Link>

            <Link
              to="/science"
              // className="article-card__Science"
              className="col-md-4 text-dark"
            >
              <div className="card">
                <img
                  src={SciencePhoto}
                  alt="SciencePhoto"
                  className="card-img-top img-fluid d-none d-md-block"
                />
                <div className="card-body">
                  <h3 className="card-title text-center">Science</h3>
                  <p className="card-text"></p>
                </div>
                <button className="btn btn-success rounded-0 d-none d-md-block">
                  Articles
                </button>
              </div>
            </Link>

            <Link
              to="/criminal"
              //  className="article-card__Criminal"
              className="col-md-4 text-dark"
            >
              <div className="card">
                <img
                  src={CriminalPhoto}
                  alt="CriminalPhoto"
                  className="card-img-top img-fluid d-none d-md-block"
                />
                <div className="card-body">
                  <h3 className="card-title text-center">Criminal</h3>
                  <p className="card-text"></p>
                </div>
                <button className="btn btn-success rounded-0 d-none d-md-block">
                  Articles
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
