import React, {useState, useEffect} from "react";
import {read} from "./apiCore"
import ShowImage from "./ShowImage";
import "./artricleRead.scss"

import "../App.scss"

import Slide from "react-reveal"
import Layout from "./Layout";

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

        <Slide bottom duration={2000}>
            <div className="article-container d-flex justify-content-center vw-100">

                <div className="read-content-container p-4">
                    <h2 className="article-header text-center fw-bold m-4">
                        {article.name}
                    </h2>

                    {/*<div className="article-photo-container-society">*/}
                    {/*</div>*/}

                    <div className="container my-2">
                        <ShowImage item={article} url="article"/>
                    </div>



                    {article.paragraph1 ? <p className="article_paragraph text-justify mt-2 lh-base">
                            {article.paragraph1}
                        </p> :
                        null}


                    {article.paragraph2 ? <p className="article_paragraph text-justify mt-2 lh-base">
                            {article.paragraph2}
                        </p> :
                        null}

                    {article.paragraph3 ? <p className="article_paragraph text-justify mt-2 lh-base">
                            {article.paragraph3}
                        </p> :
                        null}

                    {article.paragraph4 ? <p className="article_paragraph text-justify mt-2 lh-base">
                            {article.paragraph4}
                        </p> :
                        null}


                    {article.paragraph5 ? <p className="article_paragraph text-justify mt-2 lh-base">
                            {article.paragraph5}
                        </p> :
                        null}

                    {article.paragraph6 ? <p className="article_paragraph text-justify mt-2 lh-base">
                            {article.paragraph6}
                        </p> :
                        null}

                    {article.paragraph7 ? <p className="article_paragraph text-justify mt-2 lh-base">
                            {article.paragraph7}
                        </p> :
                        null}

                    {article.paragraph8 ? <p className="article_paragraph text-justify mt-2 lh-base">
                            {article.paragraph8}
                        </p> :
                        null}


                    {article.paragraph9 ? <p className="article_paragraph text-justify mt-2 lh-base">
                            {article.paragraph9}
                        </p> :
                        null}


                    {article.paragraph10 ? <p className="article_paragraph text-justify mt-2 lh-base">
                            {article.paragraph10}
                        </p> :
                        null}


                    <footer className="article-footer">
                        <span>{article.articleDate},  </span>
                        <span>Author: {article.author}</span>

                    </footer>


                </div>
            </div>
        </Slide>

    );
}
