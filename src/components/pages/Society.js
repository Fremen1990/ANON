import React, {useEffect, useState} from "react";
import "../styles/main.scss";
import "./Society.scss";
import "../../App.scss"

import {listRelatedCategory, listRelatedCategoryPublished} from "../apiCore"
import ArticleItem from "../ArticleItem";
import Layout from "../Layout";
import {data} from "./data"

const Society = () => {

const categoriesData = data.categories[0]._id;

    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(25);

    const [articles, setArticles] = useState({
        results: [],
    });

    const {results} = articles;

    const searchData =  () => {
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

    useEffect(() => {
        // loadCategories();
        searchData();
    }, []);


    return (

        <div className="society page-animation">
            <div className="articles-container">
                <nav className="articles-menu">
                    <span className="society-header">Społeczeństwo ({results.length})</span>
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

    );
}

export default Society;