import React from "react";

import CardDeckAbout from "../CardDeckAbout";
import "../styles/main.scss";
import "../../App.scss"
import Navbar from "../Navbar";
import Layout from "../Layout";

export default function About() {
    return (
        <Layout>
            <section className="about">
                <CardDeckAbout/>
            </section>
        </Layout>
    );
}
