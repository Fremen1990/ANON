import React from "react";
import "./About.scss"
import "../../../App.scss"
import Layout from "../../Layout";


export default function History() {
    return (
        <Layout>
            <div className="about-container page-animation">

                <div className="about-content-container align-items-start p-4">
                    <h2 className="m-4">Dokumenty</h2>

                    <ul className="list-unstyled">
                        <li>
                            <div className="d-flex w-100">
                                <a className="d-flex align-items-center"
                                   href="../../../assets/about/Załącznik%20nr%201.pdf" download="">
                                    <i
                                        className="far fa-file-alt m-4 documents-icon"></i>
                                    <div className="document-description">
                                        <span className="fw-bold">  About us</span>
                                        <br/>
                                        <span>anon-all-about.pdf</span>
                                    </div>
                                </a>

                            </div>

                        </li>
                        <li>
                            <div className="d-flex w-100">

                                <a className="d-flex align-items-center "
                                   href="../../../assets/about/Załącznik%20nr%201.pdf" download="">
                                    <i
                                        className="far fa-file-alt m-4 documents-icon"></i>
                                    <div className="document-description">
                                        <span className="fw-bold">  About us</span>
                                        <br/>
                                        <span>anon-all-about.pdf</span>
                                    </div>
                                </a>
                            </div>
                        </li>

                        <li>
                            <div className="d-flex w-100">

                                <a className="d-flex align-items-center"
                                   href="../../../assets/about/Załącznik%20nr%201.pdf" download="">
                                    <i
                                        className="far fa-file-alt m-4 documents-icon"></i>
                                    <div className="document-description">
                                        <span className="fw-bold">  About us</span>
                                        <br/>
                                        <span>anon-all-about.pdf</span>
                                    </div>
                                </a>
                            </div>
                        </li>

                    </ul>

                </div>
            </div>
        </Layout>
    )
        ;
}







