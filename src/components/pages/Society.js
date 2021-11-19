import React, { useEffect, useState } from "react";

import "../styles/main.scss";
import "./Society.scss";
import {getArticles, getFilteredArticles} from "../apiCore"
import ArticleItem from "../ArticleItem";

const Society = () => {

    const categorySociety ="618fcaa225f312d839fd7e8e"
    const categoryScience ="618fcabc25f312d839fd7e94"

    const [myFilters, setMyFilters] = useState({
        filters: {
            category: [],
            approved: [],
        },
    });

    const [error, setError] = useState(false);
    const [limit, setLimit] = useState(25);
    const [articlesByArrival, setArticlesByArrival] = useState([]);


    const [categories, setCategories] = useState([]);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(0);
    const [filteredResults, setFilteredResults] = useState(0);
    // const [articles, setArticles] = useState([]);


    const loadArticlesByArrival = () => {
        getArticles("createdAt", limit).then((data) => {
            if (data.error) {
                setError(data.error);
            } else {
                setArticlesByArrival(data);
            }
        });
    };

    const loadFilteredResults = (categorySociety) => {
        // console.log(newFilters)
        getFilteredArticles(skip, limit, categorySociety).then((data) => {
            if (data.error) {
                setError(data.error);
            } else {
                setFilteredResults(data.data);
                setSize(data.size);
                setSkip(0);
            }
        });
    };


        useEffect(() => {
            loadArticlesByArrival();
            // loadFilteredResults();
        }, ['']);

        return (
            <>
                <div className="society">
                    <div className="articles-container">
                        {/*{JSON.stringify(articlesByArrival)}*/}
                        <nav className="articles-menu">
                            <span className="society-header">Społeczność</span>
                            {/*<span>Data</span>*/}
                            {/*<span>Author</span>*/}
                            {/*<span>Clue words</span>*/}
                        </nav>
                        <ul className="article-list p-3">
                            {articlesByArrival.map((article, i) => (
                                <ArticleItem
                                    key={i}
                                    article={article}
                                    // destroy={destroy}
                                    // user={user}
                                />
                            ))}


                            {/*{filteredResults.map((article, i) => (*/}
                            {/*    <ArticleItem*/}
                            {/*        key={i}*/}
                            {/*        article={article}*/}
                            {/*        // destroy={destroy}*/}
                            {/*        // user={user}*/}
                            {/*    />*/}
                            {/*))}*/}

                        </ul>

                    </div>
                </div>
            </>
        );
    }

export default Society;