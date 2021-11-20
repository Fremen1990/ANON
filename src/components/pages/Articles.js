import React from "react";
import "../styles/main.scss";
import Layout from "../Layout";

import "../CardDeck.scss"
import {data} from "./data"
import CardDeckItem from "../CardDeckItem";

export default function Articles() {

    const name1 = data.categories[0].name;
    const linkTo1 = data.categories[0].linkTo;
    const LogoCard1 = data.categories[0].imgSrc;
    const name2 = data.categories[1].name;
    const linkTo2 = data.categories[1].linkTo;
    const LogoCard2 = data.categories[1].imgSrc;
    const name3 = data.categories[2].name;
    const linkTo3 = data.categories[2].linkTo;
    const LogoCard3 = data.categories[2].imgSrc;


    return (
        <Layout>
            <div className="articles">
                <div className="card-deck ">
                    <CardDeckItem name={name1} linkTo={linkTo1} LogoCard={LogoCard1} />
                    <CardDeckItem name={name2} linkTo={linkTo2} LogoCard={LogoCard2} />
                    <CardDeckItem name={name3} linkTo={linkTo3} LogoCard={LogoCard3} />
                </div>
            </div>
        </Layout>
    );
}
