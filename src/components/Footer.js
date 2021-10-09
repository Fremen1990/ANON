import React from 'react';

import "./Footer.scss";

function Footer(props) {
    return (
        <>
    <footer className="footer d-flex fixed-bottom">
        <div className="privacy_policy">
            <a className="privacy_policy_link" href="">Privacy policy</a>
        </div>

        <hr className="greenLine"/>

        <div className="contact">
                    <span className="phone">
                        <i className="fas fa-phone-alt"></i> <span>+48 564 587 245</span>   </span>
            <span className="mail"> <i className="far fa-envelope"></i> <a
                href="animalsnature.org@gmail.com">animalsnature.org@gmail.com</a></span>


        </div>
        <span className="website_by"> website by ANON 2021</span>
    </footer>
        </>
    )
}

export default Footer;