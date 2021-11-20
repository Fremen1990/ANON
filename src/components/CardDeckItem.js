import React from 'react';
import "./CardDeck.scss"
import {Link} from "react-router-dom";
import Tilt from "react-tilt";


export default function CardDeckItem({name, linkTo, LogoCard}) {
    return (

        <Link
                    to={linkTo}
                    className="col-md-4 text-dark  "
                >

            <Tilt options={{ max: 10 }}>

            <div className="card ">
                        <div className="card-img-background">
                            <img className="card-img-top" src={LogoCard} alt="Card image cap"></img>

                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                        </div>
                    </div>
            </Tilt>

        </Link>
            )
}