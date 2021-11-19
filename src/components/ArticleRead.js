import React, { useState, useEffect } from "react";
import {read}from "./apiCore"
import ShowImage from "./ShowImage";
import "./artricleRead.css"

import "../App.scss"

import Slide from "react-reveal"

export default function ArticleSociety(props) {

    const [article, setArticle] = useState({});
    const [error, setError] = useState(false);

    const loadSingleArticle = (articleId) => {
        read(articleId).then((data) => {
            if (data.error) {
                setError(data.error);
            } else {
                setArticle(data);
            }
        });
    };


    useEffect(() => {
        const articleId = props.match.params.articleId;

        loadSingleArticle(articleId);
    }, []);

    return (
        <>
            <div className="article-background page-animation">

                <Slide bottom duration={2000}>


                <div className="container">
                    <h5 className="article-header text-center fw-bold mt-3">
                        {article.name}
                    </h5>

                    {/*<div className="article-photo-container-society">*/}
                    {/*</div>*/}

                    <div className="container my-2">
                        <ShowImage item={article} url="article"  />
                    </div>


                        <p className="article_paragraph text-justify mt-2 lh-base">
                            {article.paragraph1}
                        </p>



                    <p className="article_paragraph text-justify mt-2 lh-base">
                        {article.paragraph2}
                    </p>


                    <p className="article_paragraph text-justify mt-2 lh-base">
                        {article.paragraph3}
                    </p>

                    <p className="article_paragraph text-justify mt-2 lh-base">
                        {article.paragraph4}
                    </p>


                    <p className="article_paragraph text-justify mt-2 lh-base">
                        {article.paragraph5}
                    </p>

                    <p className="article_paragraph text-justify mt-2 lh-base">
                        {article.paragraph6}
                    </p>

                    <p className="article_paragraph text-justify mt-2 lh-base">
                        {article.paragraph7}
                    </p>

                    <p className="article_paragraph text-justify mt-2 lh-base">
                        {article.paragraph8}
                    </p>


                    <p className="article_paragraph text-justify mt-2 lh-base">
                        {article.paragraph9}
                    </p>


                    <p className="article_paragraph text-justify mt-2 lh-base">
                        {article.paragraph10}
                    </p>




                    <footer className="p-3">
              <span>{article.articleDate},  </span>
              <span>Author: {article.author}</span>

          </footer>


                </div>
                </Slide>

            </div>
        </>
    );
}
