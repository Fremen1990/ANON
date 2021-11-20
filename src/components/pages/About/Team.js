import React from "react";
import "./About.scss"
import './Team.scss'
import "../../../App.scss"

import Slide from "react-reveal";


import TeamMemberPhoto from '../../../assets/about/team/Edith.png'
import TeamMemberPhoto2 from '../../../assets/about/team/Devthomas - deskotop.png'
import TeamMemberEmpty from '../../../assets/about/team/EmptyPersonFoto.png'
import Layout from "../../Layout";

export default function History() {
    return (
        <Layout>
            <div className="about-container page-animation">
                <div className="about-content-container">
                    <div className="team-container justify-content-start">
                        <h3 className="m-4">Zespół</h3>

                        <Slide bottom duration={1000}>


                            <div className="card m-0 p-2 d-grid w-100 h-100"
                                // style={{"max-width": "540px"}}
                            >
                                <div className="row g-0">
                                    <div className="col-2">
                                        <img src={TeamMemberPhoto} className="img-fluid p-0 mb-3"
                                             alt="Team Member Photo"/>
                                        {/*<i className="fab fa-facebook-f fs-4 m-1"></i>*/}
                                        {/*<i className="fab fa-instagram fs-4 m-1 "></i>*/}
                                        {/*<i className="far fa-envelope fs-4 m-1"></i>*/}
                                    </div>
                                    <div className="col-8">
                                        <div className="d-grid pl-4">
                                            <h5 className="card-title">Edith</h5>
                                            <h4 className="card-role fs-6 ">Role in ANON: founder, CEO</h4>
                                            <p className="card-text text-dark ">Z wykształcenia jestem biologiem
                                                molekularnym, a z pasji nauczycielką.
                                                Poza tym, kocham zwierzęta! Z tej miłości zrodził się Anon.
                                                Zajmuję się wszystkim po kolei - od budowania fundamentu Anon, przez
                                                współpracę z moim cudownym zespołem, po wsparcie w tworzeniu naszych
                                                innowacyjnych projektów.</p>

                                            <p className="card-text"> Jeżeli chcesz się ze mną skontaktować, zadzwoń pod
                                                numer 730 373 093 lub
                                                napisz na adres e-mail animalsnature.org@gmail.com</p>


                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card m-0 p-2 d-grid w-100 h-100"
                                // style={{"max-width": "540px"}}
                            >
                                <div className="row g-0">
                                    <div className="col-2">
                                        <img src={TeamMemberPhoto2} className="img-fluid p-0 mb-3"
                                             alt="Team Member Photo"/>
                                        {/*<i className="fab fa-facebook-f fs-4 m-1"></i>*/}
                                        {/*<i className="fab fa-instagram fs-4 m-1 "></i>*/}
                                        {/*<i className="far fa-envelope fs-4 m-1"></i>*/}
                                    </div>
                                    <div className="col-8">
                                        <div className="d-grid pl-4">
                                            <h5 className="card-title">Tomasz</h5>
                                            <h4 className="card-role fs-6">Role in ANON: Web Developer</h4>
                                            <p className="card-text text-dark ">My name is Tomasz and I have always been
                                                an
                                                animal lover. I have three big dogs that require a lot of attencion!

                                            </p>
                                            <p className="card-text text-dark ">
                                                Tomasz is our web developer and builds our website. He ensures that it
                                                meets
                                                high quality standards
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card m-0 p-2 d-grid w-100 h-100"
                                // style={{"max-width": "540px"}}
                            >
                                <div className="row g-0">
                                    <div className="col-2">
                                        <img src={TeamMemberEmpty} className="img-fluid p-0 mb-3  "
                                             alt="Team Member Photo"/>
                                        {/*<i className="fab fa-facebook-f fs-4 m-1"></i>*/}
                                        {/*<i className="fab fa-instagram fs-4 m-1 "></i>*/}
                                        {/*<i className="far fa-envelope fs-4 m-1"></i>*/}
                                    </div>
                                    <div className="col-8">
                                        <div className="d-grid pl-4">
                                            <h5 className="card-title">Milena</h5>
                                            <h4 className="card-role fs-6">Edith's right hand in ANON</h4>
                                            <p className="card-text text-dark ">Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit. Amet eius ipsam itaque, nobis perspiciatis reiciendis
                                                sint
                                                sit. Consequatur, inventore, nihil. Accusantium ad aliquam doloribus,
                                                facere
                                                magni nobis quae qui unde...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card m-0 p-2 d-grid w-100 h-100"
                                // style={{"max-width": "540px"}}
                            >
                                <div className="row g-0">
                                    <div className="col-2">
                                        <img src={TeamMemberEmpty} className="img-fluid p-0 mb-3"
                                             alt="Team Member Photo"/>
                                        {/*<i className="fab fa-facebook-f fs-4 m-1"></i>*/}
                                        {/*<i className="fab fa-instagram fs-4 m-1 "></i>*/}
                                        {/*<i className="far fa-envelope fs-4 m-1"></i>*/}
                                    </div>
                                    <div className="col-8">
                                        <div className="d-grid pl-4">
                                            <h5 className="card-title">Julia </h5>
                                            <h4 className="card-role fs-6">UX Designer</h4>
                                            <p className="card-text text-dark ">Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit. Amet eius ipsam itaque, nobis perspiciatis reiciendis
                                                sint
                                                sit. Consequatur, inventore, nihil. Accusantium ad aliquam doloribus,
                                                facere
                                                magni nobis quae qui unde...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="last-card-margin card m-0 p-2 d-grid w-100 h-100"
                                // style={{"max-width": "540px"}}
                            >
                                <div className="row g-0">
                                    <div className="col-2">
                                        <img src={TeamMemberEmpty} className="img-fluid p-0 mb-3"
                                             alt="Team Member Photo"/>
                                        {/*<i className="fab fa-facebook-f fs-4 m-1"></i>*/}
                                        {/*<i className="fab fa-instagram fs-4 m-1 "></i>*/}
                                        {/*<i className="far fa-envelope fs-4 m-1"></i>*/}
                                    </div>
                                    <div className="col-8">
                                        <div className="d-grid pl-4 ">
                                            <h5 className="card-title">Karol</h5>
                                            <h4 className="card-role fs-6">Graphic Designer</h4>
                                            <p className="card-text text-dark ">Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit. Amet eius ipsam itaque, nobis perspiciatis reiciendis
                                                sint
                                                sit. Consequatur, inventore, nihil. Accusantium ad aliquam doloribus,
                                                facere
                                                magni nobis quae qui unde...</p>
                                        </div>
                                        <div className="row h-50">
                                            <div className="col-8"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Slide>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

