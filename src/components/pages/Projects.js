import React from "react";
import ProjecctsIcon from "../../assets/projects/projects_icon.svg";
import CardDeckProjects from "../CardDeckProjects";
import "../styles/main.scss";
import "../../App.scss"

export default function Projects() {
    return (
        <>
            <section className="articles">
                <CardDeckProjects/>

            </section>

        </>
    );
}
