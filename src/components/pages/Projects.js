import React from "react";
import CardDeckProjects from "../CardDeckProjects";
import "../styles/main.scss";
import "../../App.scss"
import Layout from "../Layout";

export default function Projects() {
    return (
        <Layout>
            <section className="projects">
                <CardDeckProjects/>

            </section>

        </Layout>
    );
}
