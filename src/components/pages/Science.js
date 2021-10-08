import React from "react";

import {Link} from "react-router-dom";

import "../styles/main.scss";
import "./Society.scss";

import ArticlePhoto from "../../assets/articles/science/Science - article1.PNG";

export default function Science() {
    return (
        <>
            <div className="society">
                <div className="articles-container">
                    <nav className="articles-menu">
                        <span>Science</span>
                        {/*<span>Data</span>*/}
                        {/*<span>Author</span>*/}
                        {/*<span>Clue words</span>*/}
                    </nav>

                    <ul className="article-list p-0">

                        <Link
                            to="/science/article"
                        >
                        <li className="article-item d-flex align-items-center border h-25">
                            <img className="h-75" src={ArticlePhoto} alt="cat"/>
                            <div className="line-item-body d-flex h-75">
                                <h5 className="line-item-article-title text-center">         The application of deer antler stem cells in medicine and
                                    cosmetology.  </h5>
                                <p className="line-item-article-description"> The valuable properties of deer antlers have been known and
                                    used in alternative medicine for a long time...</p>
                                {/*<span>Date</span>*/}
                                {/*<span>Author</span>*/}
                            </div>
                        </li>
                        </Link>

                        <Link
                            to="/science/article"
                        >
                            <li className="article-item d-flex align-items-center border h-25">
                                <img className="h-75" src={ArticlePhoto} alt="cat"/>
                                <div className="line-item-body d-flex h-75">
                                    <h5 className="line-item-article-title text-center">         The application of deer antler stem cells in medicine and
                                        cosmetology.  </h5>
                                    <p className="line-item-article-description"> The valuable properties of deer antlers have been known and
                                        used in alternative medicine for a long time...</p>
                                    {/*<span>Date</span>*/}
                                    {/*<span>Author</span>*/}
                                </div>
                            </li>
                        </Link>

                        <Link
                            to="/science/article"
                        >
                            <li className="article-item d-flex align-items-center border h-25">
                                <img className="h-75" src={ArticlePhoto} alt="cat"/>
                                <div className="line-item-body d-flex h-75">
                                    <h5 className="line-item-article-title text-center">         The application of deer antler stem cells in medicine and
                                        cosmetology.  </h5>
                                    <p className="line-item-article-description"> The valuable properties of deer antlers have been known and
                                        used in alternative medicine for a long time...</p>
                                    {/*<span>Date</span>*/}
                                    {/*<span>Author</span>*/}
                                </div>
                            </li>
                        </Link>

                        <Link
                            to="/science/article"
                        >
                            <li className="article-item d-flex align-items-center border h-25">
                                <img className="h-75" src={ArticlePhoto} alt="cat"/>
                                <div className="line-item-body d-flex h-75">
                                    <h5 className="line-item-article-title text-center">         The application of deer antler stem cells in medicine and
                                        cosmetology.  </h5>
                                    <p className="line-item-article-description"> The valuable properties of deer antlers have been known and
                                        used in alternative medicine for a long time...</p>
                                    {/*<span>Date</span>*/}
                                    {/*<span>Author</span>*/}
                                </div>
                            </li>
                        </Link>

                    </ul>
                </div>
            </div>
        </>
    );
}
