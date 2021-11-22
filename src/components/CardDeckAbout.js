import React from 'react';
import HistoryIcon from "../assets/about/icons/ikona-about-history.svg";
import TeamIcon from "../assets/about/icons/ikona-about-team.svg";
import DocumentslIcon from "../assets/about/icons/ikona-about-documents.svg";
import "./CardDeck.scss"
import {Link} from 'react-router-dom'

export default function CardDeck() {
    return (
        <>
            <div className="card-deck">

                <Link
                    to="/history"
                    //  className="article-card__Criminal"
                    className="col-md-4 text-dark"
                >
                    <div className="card">
                        <div className="card-img-background">
                            <img className="card-img-top" src={HistoryIcon} alt="Card image cap"></img>

                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Historia</h5>
                        </div>
                    </div>

                </Link>



                <Link
                    to="/team"
                    //  className="article-card__Criminal"
                    className="col-md-4 text-dark"
                >
                    <div className="card">
                        <div className="card-img-background">
                            <img className="card-img-top" src={TeamIcon}
                                 alt="Card image cap"></img>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Zespół</h5>
                        </div>
                    </div>
                </Link>

                <Link
                    to="/documents"
                    //  className="article-card__Criminal"
                    className="col-md-4 text-dark"
                >
                    <div className="card">
                        <div className="card-img-background">
                            <img className="card-img-top" src={DocumentslIcon}
                                 alt="Card image cap"></img>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Dokumenty</h5>
                        </div>
                    </div>
                </Link>


            </div>
        </>
    )
}