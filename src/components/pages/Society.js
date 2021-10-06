import React from "react";

// import {Link} from "react-router-dom";

import "../styles/main.scss";
import "./Society.scss";

import ArticlePhoto from "../../assets/articles/Society-article1.PNG";

export default function Society() {
    return (
        <>
            <div className="society">
                {/* <h2>Society</h2> */}

                <div className="articles-container">
                    <nav className="articles-menu">
                        <span>Data</span>
                        <span>Author</span>
                        <span>Clue words</span>
                    </nav>

                    <ul className="article-list">

                        {/*<Link*/}
                        {/*    to="/article1"*/}
                        {/*    // className="article-card__Science"*/}
                        {/*    // className="col-md-4 text-dark"*/}
                        {/*>*/}
                        <li className="article-item">
                            <img src={ArticlePhoto} alt="cat"/>
                            <div className="line-item-body">
                                <h5 className="line-item-article-title">The history of the founding of ANON</h5>
                                <p className="line-item-article-description">You know that ANON's area of interest is
                                    the
                                    animal kingdom but our website does not explain what was the source of inspiration
                                    for
                                    our...</p>
                                {/*<span>Date</span>*/}
                                {/*<span>Author</span>*/}
                            </div>
                        </li>
                        {/*</Link>*/}


                        {/*<Link*/}
                        {/*    to="/article1"*/}
                        {/*    // className="article-card__Science"*/}
                        {/*    // className="col-md-4 text-dark"*/}
                        {/*>*/}
                        <li className="article-item">
                            <img src={ArticlePhoto} alt="cat"/>
                            <div className="line-item-body">
                                <h5 className="line-item-article-title">The history of the founding of ANON</h5>
                                <p className="line-item-article-description">You know that ANON's area of interest is
                                    the
                                    animal kingdom but our website does not explain what was the source of inspiration
                                    for
                                    our...</p>
                                {/*<span>Date</span>*/}
                                {/*<span>Author</span>*/}
                            </div>
                        </li>
                        {/*</Link>*/}



                        {/*<Link*/}
                        {/*    to="/article1"*/}
                        {/*    // className="article-card__Science"*/}
                        {/*    // className="col-md-4 text-dark"*/}
                        {/*>*/}
                        <li className="article-item">
                            <img src={ArticlePhoto} alt="cat"/>
                            <div className="line-item-body">
                                <h5 className="line-item-article-title">The history of the founding of ANON</h5>
                                <p className="line-item-article-description">You know that ANON's area of interest is
                                    the
                                    animal kingdom but our website does not explain what was the source of inspiration
                                    for
                                    our...</p>
                                {/*<span>Date</span>*/}
                                {/*<span>Author</span>*/}
                            </div>
                        </li>
                        {/*</Link>*/}


                    </ul>


                </div>

            </div>
        </>
    );
}
