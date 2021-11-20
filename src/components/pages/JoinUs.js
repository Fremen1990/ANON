import {useState} from "react";
import React from "react";
import "../styles/main.scss";
import ContactForm from "../ContactForm";
import "../ContactForm.scss";
import Layout from "../Layout";

export default function JoinUs() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <Layout>
            <div className="contact-us-container">
                <div className="form-container mt-0">


                    <ContactForm submitForm={submitForm}/>

                </div>
            </div>
        </Layout>
    );
}
