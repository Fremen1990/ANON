import React from "react";
import "./App.scss";

import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./components/pages/Home";
import Articles from "./components/pages/Articles";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import JoinUs from "./components/pages/JoinUs";
import Society from "./components/pages/Society";
import Science from "./components/pages/Science";
import Criminal from "./components/pages/Criminal";

import ArticleRead from "./components/ArticleRead"


import CookieBot from "react-cookiebot";
import Footer from "./components/Footer";
import History from "./components/pages/About/History";
import Team from "./components/pages/About/Team";
import Documents from './components/pages/About/Documents'
import Contact from "./components/pages/Contact";

function App() {
    const domainGroupId = "8dc9fd98-57eb-434c-813e-609e2aac3667";

    return (
        <Router>
            <Navbar/>

            <Switch>

                // Navigation  routes
                <Route path="/" exact component={Home}/>
                <Route path="/articles" exact component={Articles}/>
                <Route path="/projects" exact component={Projects}/>
                <Route path="/join-us" exact component={JoinUs}/>
                <Route path="/about" exact component={About}/>
                <Route path="/contact-us" exact component={Contact}/>

                //Articles routes
                <Route path="/article/:articleId" exact component={ArticleRead}/>
                <Route path="/society" exact component={Society}/>
                <Route path="/science" exact component={Science}/>
                <Route path="/criminal" exact component={Criminal}/>

                //About routes
                <Route path="/history" exact component={History}/>
                <Route path="/team" exact component={Team}/>
                <Route path="/documents" exact component={Documents}/>

            </Switch>


            <Footer/>
            <CookieBot domainGroupId={domainGroupId}/>
        </Router>
    );
}

export default App;
