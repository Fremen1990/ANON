import React from "react";
import "../styles/main.scss";
import CardDeck from "../CardDeck";
import Layout from "../Layout";

export default function Articles() {
    return (
        <Layout>
            <div className="articles">
                <CardDeck/>
            </div>
        </Layout>
    );
}
