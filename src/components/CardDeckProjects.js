import React from 'react';
import ProjecctsIcon from "../assets/projects/projects_icon.svg";
import "./CardDeck.scss"
import {Link} from 'react-router-dom'

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Tilt from "react-tilt";




const CardExample = () =>(

        <Tilt options={{ max: 10 }}>

            <Link
                to="/history"
                //  className="article-card__Criminal"
                className="col-md-4 text-dark"
            >
                <div className="card" >
                    <div className="card-img-background">
                        <img className="card-img-top" src={ProjecctsIcon} alt="Card image cap"></img>

                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Project </h5>
                    </div>
                </div>

            </Link>


        </Tilt>



    )





export default function CardDeckProjects() {
    return (
        <>
            <div className="card-deck">


                <CardExample/>
                <CardExample/>
                <CardExample/>


                {/*<Link*/}
                {/*    to="/history"*/}
                {/*    //  className="article-card__Criminal"*/}
                {/*    className="col-md-4 text-dark"*/}
                {/*>*/}
                {/*    <div className="card">*/}
                {/*        <div className="card-img-background">*/}
                {/*            <img className="card-img-top" src={ProjecctsIcon} alt="Card image cap"></img>*/}

                {/*        </div>*/}
                {/*        <div className="card-body">*/}
                {/*            <h5 className="card-title">Project 1</h5>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*</Link>*/}

                {/*<Link*/}
                {/*    to="/team"*/}
                {/*    //  className="article-card__Criminal"*/}
                {/*    className="col-md-4 text-dark"*/}
                {/*>*/}
                {/*    <div className="card">*/}
                {/*        <div className="card-img-background">*/}
                {/*            <img className="card-img-top" src={ProjecctsIcon}*/}
                {/*                 alt="Card image cap"></img>*/}
                {/*        </div>*/}
                {/*        <div className="card-body">*/}
                {/*            <h5 className="card-title">Project 2</h5>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</Link>*/}

                {/*<Link*/}
                {/*    to="/documents"*/}
                {/*    //  className="article-card__Criminal"*/}
                {/*    className="col-md-4 text-dark"*/}
                {/*>*/}
                {/*    <div className="card">*/}
                {/*        <div className="card-img-background">*/}
                {/*            <img className="card-img-top" src={ProjecctsIcon}*/}
                {/*                 alt="Card image cap"></img>*/}
                {/*        </div>*/}
                {/*        <div className="card-body">*/}
                {/*            <h5 className="card-title">Project 3</h5>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</Link>*/}


            </div>
        </>
    )
}