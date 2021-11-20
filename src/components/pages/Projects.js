import React from "react";
import CardDeckProjects from "../CardDeckProjects";
import "../styles/main.scss";
import "../../App.scss"
import Layout from "../Layout";
import CardDeckItem from "../CardDeckItem";
import "../CardDeck.scss"
import {data} from "./data";


export default function Projects() {

    const name1 = data.projects[0].name;
    const linkTo1 = data.projects[0].linkTo;
    const LogoCard1 = data.projects[0].imgSrc;
    const name2 = data.projects[1].name;
    const linkTo2 = data.projects[1].linkTo;
    const LogoCard2 = data.projects[1].imgSrc;
    const name3 = data.projects[2].name;
    const linkTo3 = data.projects[2].linkTo;
    const LogoCard3 = data.projects[2].imgSrc;

    return (
        <Layout>
            <section className="projects">
                <div className="card-deck ">
                    <CardDeckItem name={name1} linkTo={linkTo1} LogoCard={LogoCard1} />
                    <CardDeckItem name={name2} linkTo={linkTo2} LogoCard={LogoCard2} />
                    <CardDeckItem name={name3} linkTo={linkTo3} LogoCard={LogoCard3} />
                </div>

            </section>

        </Layout>
    );
}
