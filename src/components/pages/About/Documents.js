import React from "react";
import "./About.scss"


export default function History() {
    return (
        <>
            <div className="about-container">

                <div className="about-content-container">
                    <h3 className="m-4">Documents</h3>

                    <ul className="list-unstyled">
                        <li >
                            <a className="d-flex align-items-center" href="../../../assets/about/Załącznik%20nr%201.pdf" download="">
                                <i
                                    className="far fa-file-alt m-4 documents-icon" ></i>
                                <div className="document-description">
                                    <span className="fw-bold">  About us</span>
                                    <br/>
                                    <span>anon-all-about.pdf</span>
                                </div>
                           </a>
                        </li>
                        <li >
                            <a className="d-flex align-items-center " href="../../../assets/about/Załącznik%20nr%201.pdf" download="">
                                <i
                                    className="far fa-file-alt m-4 documents-icon"></i>
                                <div className="document-description">
                                    <span className="fw-bold">  About us</span>
                                    <br/>
                                    <span>anon-all-about.pdf</span>
                                </div>
                            </a>
                        </li>

                        <li >
                            <a className="d-flex align-items-center" href="../../../assets/about/Załącznik%20nr%201.pdf" download="">
                                <i
                                    className="far fa-file-alt m-4 documents-icon"></i>
                                <div className="document-description">
                                    <span className="fw-bold">  About us</span>
                                    <br/>
                                    <span>anon-all-about.pdf</span>
                                </div>
                            </a>
                        </li>

                    </ul>

                </div>
            </div>
        </>
    )
        ;
}







