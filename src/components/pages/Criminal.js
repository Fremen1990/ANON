import React, {useEffect, useState} from "react";

import {Link} from "react-router-dom";

import "../styles/main.scss";
import "./Society.scss";

import "../../App.scss"

import {getArticles} from "../apiCore";
import ArticleItem from "../ArticleItem";
import Layout from "../Layout";


export default function Criminal() {



    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(25);
    const [articlesByArrival, setArticlesByArrival] = useState([]);


    const loadArticlesByArrival = () => {
        getArticles("createdAt", limit).then((data) => {
            if (data.error) {
                setError(data.error);
            } else {
                setArticlesByArrival(data);
            }
        });
    };

    useEffect(() => {
        loadArticlesByArrival();
    }, ['']);

    return (
 <Layout>
            <div className="society page-animation">
                <div className="articles-container">
                    <nav className="articles-menu">
                        <span>Przestępczość</span>

                    </nav>

                    <ul className="article-list p-0">

                        {articlesByArrival.map((article, i) => (
                            <ArticleItem
                                key={i}
                                article={article}

                            />
                        ))}

                        <div className="h-50"></div>

                    </ul>
                </div>
            </div>
 </Layout>
    );
}
