import React, {useEffect, useState} from "react";

import {Link} from "react-router-dom";

import "../styles/main.scss";
import "./Society.scss";

import "../../App.scss"

import {getArticles, listRelatedCategory} from "../apiCore";
import ArticleItem from "../ArticleItem";
import Layout from "../Layout";
import {data} from "./data";


export default function Criminal() {

    const categoriesData = data.categories[2]._id;

    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(25);

    const [articles, setArticles] = useState({
        results: [],
    });

    const {results} = articles;

    const searchData = () => {
        listRelatedCategory(categoriesData, "createdAt", limit).then(
            (response) => {
                if (response.error) {
                    console.log(response.error);
                } else {
                    response.forEach((article , i )=> {
                        if (article.approved !== 1) {
                            response.splice(i,1);
                        }
                    })
                    setArticles({results: response});

                }
            }
        );


    };


    setTimeout((console.log(results)), 1000);
    // setTimeout(console.log(resultt.approved) , 1000);


    useEffect(() => {
        // loadCategories();
        searchData();

    }, []);

    return (
        <Layout>
            <div className="society page-animation">
                <div className="articles-container">
                    <nav className="articles-menu">
                        <span>Przestępczość ({results.length})</span>

                    </nav>

                    <ul className="article-list p-0">
                        <div className="row">
                            {results.map((article, i) => (
                                <ArticleItem key={i} article={article}></ArticleItem>
                            ))}
                        </div>
                        <div className="h-50"></div>

                    </ul>
                </div>
            </div>
        </Layout>
    );
}
