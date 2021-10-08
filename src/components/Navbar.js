import React, {useState} from "react";
// import { Button } from "./Button";
import {Link} from "react-router-dom";
import "./Navbar.scss";
import Dropdown from "./Dropdown";
import logoNav from "../../src/assets/Logo/ANON _ Edyta LOGO white small.png";

function Navbar() {
    const [click, setClick] = useState(false);

    const [dropdown, setDropDown] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    const closeMobileMenu = () => {
        setClick(false);
    };

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropDown(false);
        } else {
            setDropDown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropDown(false);
        } else {
            setDropDown(false);
        }
    };

    return (
        <>
            <nav className="navbar flex-lg-column">


                    <Link to="/" className="logoNew justify-content-center">
                        <img className="logo-img " src={logoNav} alt="Anon" />
                    </Link>

                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>

                    <div
                        className={
                            click ? "nav-menu__container active" : "nav-menu__container"
                        }
                    >
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className="nav-links text-white"
                                    onClick={closeMobileMenu}
                                >
                                    Home
                                </Link>
                            </li>

                            <li
                                className="nav-item"
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                            >
                                <Link
                                    to="/articles"
                                    className="nav-links text-white"
                                    onClick={closeMobileMenu}
                                >
                                    Articles <i className="fas fa-caret-down"/>
                                </Link>
                                {dropdown && <Dropdown/>}
                            </li>

                            <li className="nav-item">
                                <Link
                                    to="/projects"
                                    className="nav-links text-white"
                                    onClick={closeMobileMenu}
                                >
                                    Projects
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    to="/join-us"
                                    className="nav-links text-white"
                                    onClick={closeMobileMenu}
                                >
                                    Join us
                                </Link>
                            </li>


                            <li className="nav-item">
                                <Link
                                    to="/about"
                                    className="nav-links text-white"
                                    onClick={closeMobileMenu}
                                >
                                    About
                                </Link>
                            </li>

                            {/*<li className="nav-item">*/}
                            {/*  <Link*/}
                            {/*    to="/membership"*/}
                            {/*    className="nav-links text-white"*/}
                            {/*    onClick={closeMobileMenu}*/}
                            {/*  >*/}
                            {/*    Membership*/}
                            {/*  </Link>*/}
                            {/*</li>*/}

                            <li className="nav-item">
                                <Link
                                    to="/contact-us"
                                    className="nav-links text-white"
                                    onClick={closeMobileMenu}
                                >
                                    Contact
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* <Button /> */}
            </nav>
        </>
);
}

export default Navbar;
