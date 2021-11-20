import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Layout = ({
                    className,
                    children,
                }) => (
    <>

        {/*<Navbar/>*/}
        <div className={`${className} page-animation`}>{children}</div>
        {/*<Footer/>*/}
    </>
);

export default Layout;
