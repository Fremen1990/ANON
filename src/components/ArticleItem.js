import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import ShowImage from "./ShowImage";

import Slide from 'react-reveal'


const ArticleItem =( {article})=>{

const categorySociety ="618fcaa225f312d839fd7e8e";
const categoryScience ="618fcabc25f312d839fd7e94";
const categoryCriminal ="618fcab825f312d839fd7e91";

    return(<>

<Slide bottom duration={2000} >


    <Link
            to={`/article/${article._id}`}
        >
        {JSON.stringify(article.category._id)}
        {/*{JSON.stringify(article.category._id)}*/}
            <li className="article-item d-flex align-items-center border p-2 col-12 focus">
                <ShowImage item={article} url="article" className="col-3" />

                <div className="line-item-body px-3 col-9">
                    <h1 className="line-item-article-title text-sm-left text-lg-left ">
                        {article.name}
                    </h1>

                    <p className="line-item-article-description">
                        {article.paragraph1.substring(0,400)}...
                    </p>
                    <small>{article.articleDate}</small>
                    <small>Author: {article.author}</small>
                </div>
            </li>
        </Link>

</Slide>

        </>
    )
}

export default ArticleItem;