import React from "react";

import {Link} from "react-router-dom";

import "../styles/main.scss";
import "./Society.scss";

import ArticlePhoto from "../../assets/articles/science/Science - article1 (2).PNG";

export default function Criminal() {
    return (
        <>
            <div className="society">
                <div className="articles-container">
                    <nav className="articles-menu">
                        <span>Criminal</span>
                        {/*<span>Data</span>*/}
                        {/*<span>Author</span>*/}
                        {/*<span>Clue words</span>*/}
                    </nav>

                    <ul className="article-list p-0">

                        <Link
                            to="/criminal/article"
                        >
                        <li className="article-item d-flex align-items-center border h-25">
                            <img className="h-75" src={ArticlePhoto} alt="cat"/>
                            <div className="line-item-body d-flex h-75">
                                <h5 className="line-item-article-title text-center"> Lorem ipsum dolor sit amet, consectetur adipisicing </h5>
                                <p className="line-item-article-description"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem culpa deleniti enim impedit, nesciunt nulla perspiciatis quas quibusdam, ration</p>
                                {/*<span>Date</span>*/}
                                {/*<span>Author</span>*/}
                            </div>
                        </li>
                        </Link>

                        <Link
                            to="/criminal/article"
                        >
                            <li className="article-item d-flex align-items-center border h-25">
                                <img className="h-75" src={ArticlePhoto} alt="cat"/>
                                <div className="line-item-body d-flex h-75">
                                    <h5 className="line-item-article-title text-center"> Lorem ipsum dolor sit amet, consectetur adipisicing </h5>
                                    <p className="line-item-article-description"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem culpa deleniti enim impedit, nesciunt nulla perspiciatis quas quibusdam, ration</p>
                                    {/*<span>Date</span>*/}
                                    {/*<span>Author</span>*/}
                                </div>
                            </li>
                        </Link>

                        <Link
                            to="/criminal/article"
                        >
                            <li className="article-item d-flex align-items-center border h-25">
                                <img className="h-75" src={ArticlePhoto} alt="cat"/>
                                <div className="line-item-body d-flex h-75">
                                    <h5 className="line-item-article-title text-center"> Lorem ipsum dolor sit amet, consectetur adipisicing </h5>
                                    <p className="line-item-article-description"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem culpa deleniti enim impedit, nesciunt nulla perspiciatis quas quibusdam, ration</p>
                                    {/*<span>Date</span>*/}
                                    {/*<span>Author</span>*/}
                                </div>
                            </li>
                        </Link>

                        <Link
                            to="/criminal/article"
                        >
                            <li className="article-item d-flex align-items-center border h-25">
                                <img className="h-75" src={ArticlePhoto} alt="cat"/>
                                <div className="line-item-body d-flex h-75">
                                    <h5 className="line-item-article-title text-center"> Lorem ipsum dolor sit amet, consectetur adipisicing </h5>
                                    <p className="line-item-article-description"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem culpa deleniti enim impedit, nesciunt nulla perspiciatis quas quibusdam, ration</p>
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
