import React from "react";
import "./App.scss";

import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./components/pages/Home";
import Articles from "./components/pages/Articles";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import JoinUs from "./components/pages/JoinUs";
import Subscribe from "./components/pages/Subscribe";
import News from "./components/pages/News";
import Society from "./components/pages/Society";
import Science from "./components/pages/Science";
import Criminal from "./components/pages/Criminal";
import Membership from "./components/pages/Membership";
// import {LogoAnon} from "./components/LogoAnon";

// import Article from "./components/pages/Articles/Science/Article";
import ArticleSociety from "./components/pages/Articles/Society/ArticleSociety";
import ArticleScience from "./components/pages/Articles/Science/ArticleScience";
import ArticleCriminal from "./components/pages/Articles/Criminal/ArticlScience";
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
                <Route path="/" exact component={Home}/>

                //Articles routes
                <Route path="/articles" exact component={Articles}/>
                <Route path="/article/:articleId" exact component={ArticleRead}/>
                <Route path="/society" exact component={Society}/>
                <Route path="/society/article" exact component={ArticleSociety}/>
                <Route path="/science" exact component={Science}/>
                <Route path="/science/article" exact component={ArticleScience}/>
                <Route path="/criminal" exact component={Criminal}/>
                <Route path="/criminal/article" exact component={ArticleCriminal}/>

                <Route path="/projects" exact component={Projects}/>

                // Main page routes
                <Route path="/about" exact component={About}/>
                <Route path="/history" exact component={History}/>
                <Route path="/team" exact component={Team}/>
                <Route path="/documents" exact component={Documents}/>
                <Route path="/membership" exact component={Membership}/>
                <Route path="/join-us" exact component={JoinUs}/>
                <Route path="/subscribe" exact component={Subscribe}/>
                <Route path="/news" exact component={News}/>
                <Route path="/contact-us" exact component={Contact}/>


            </Switch>
            {/*<LogoAnon />*/}


            <Footer/>
            <CookieBot domainGroupId={domainGroupId}/>
        </Router>
    );
}

export default App;
