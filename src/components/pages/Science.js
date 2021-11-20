import React, {useEffect, useState} from "react";

import {Link} from "react-router-dom";

import "../styles/main.scss";
import "./Society.scss";

import "../../App.scss"

import ArticleItem from "../ArticleItem";
import {getArticles} from "../apiCore";
import Layout from "../Layout";


export default function Science() {

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
                        <span>Nauka</span>

                    </nav>

                    <ul className="article-list p-0">

                        {articlesByArrival.map((article, i) => (
                            <ArticleItem
                                key={i}
                                article={article}

                            />
                        ))}


                    </ul>
                </div>
            </div>
        </Layout>
    );
}
