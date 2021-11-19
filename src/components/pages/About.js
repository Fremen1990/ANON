import React from "react";

import CardDeckAbout from "../CardDeckAbout";
import "../styles/main.scss";
import "../../App.scss"

export default function About() {
    return (
        <>
            <section className="about page-animation">

                <CardDeckAbout/>
            </section>
        </>
    );
}
