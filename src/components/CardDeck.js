import React from 'react';
import SocietyIcon from "../assets/articles/icons/ikona-articles-society.svg";
import ScienceIcon from "../assets/articles/icons/ikona-articles-science.svg";
import CriminalIcon from "../assets/articles/icons/ikona-articles-criminology.svg";
import "./CardDeck.scss"
import {Link} from "react-router-dom";


export default function CardDeck() {
    return (
        <>

            <div className="card-deck">
                <Link
                    to="/society"
                    // className="article-card__Society"
                    className="col-md-4 text-dark"
                >
                    <div className="card">
                        <div className="card-img-background">
                            <img className="card-img-top" src={SocietyIcon} alt="Card image cap"></img>

                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Society</h5>
                        </div>
                    </div>
                </Link>

                <Link
                    to="/science"
                    // className="article-card__Science"
                    className="col-md-4 text-dark"
                >
                    <div className="card">
                        <div className="card-img-background">
                            <img className="card-img-top" src={ScienceIcon}
                                 alt="Card image cap"></img>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Science</h5>
                        </div>
                    </div>
                </Link>

                <Link
                    to="/criminal"
                    //  className="article-card__Criminal"
                    className="col-md-4 text-dark"
                >
                    <div className="card">
                        <div className="card-img-background">
                            <img className="card-img-top" src={CriminalIcon}
                                 alt="Card image cap"></img>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Criminal</h5>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}