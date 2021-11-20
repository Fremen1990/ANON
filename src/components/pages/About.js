import React from "react";
import "../styles/main.scss";
import "../../App.scss"
import Layout from "../Layout";
import CardDeckItem from "../CardDeckItem";
import "../CardDeck.scss"
import {data} from "./data";

export default function About() {

    const name1 = data.about[0].name;
    const linkTo1 = data.about[0].linkTo;
    const LogoCard1 = data.about[0].imgSrc;
    const name2 = data.about[1].name;
    const linkTo2 = data.about[1].linkTo;
    const LogoCard2 = data.about[1].imgSrc;
    const name3 = data.about[2].name;
    const linkTo3 = data.about[2].linkTo;
    const LogoCard3 = data.about[2].imgSrc;

    return (
        <Layout>
            <section className="about">
                <div className="card-deck ">
                    <CardDeckItem name={name1} linkTo={linkTo1} LogoCard={LogoCard1} />
                    <CardDeckItem name={name2} linkTo={linkTo2} LogoCard={LogoCard2} />
                    <CardDeckItem name={name3} linkTo={linkTo3} LogoCard={LogoCard3} />
                </div>
            </section>
        </Layout>
    );
}
