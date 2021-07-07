import React from "react";
import "./App.scss";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Articles from "./components/pages/Articles";
import About from "./components/pages/About";
import ContactUs from "./components/pages/ContactUs";
import Subscribe from "./components/pages/Subscribe";
import News from "./components/pages/News";
import Society from "./components/pages/Society";
import Science from "./components/pages/Science";
import Criminal from "./components/pages/Criminal";
import Membership from "./components/pages/Membership";
import { LogoAnon } from "./components/LogoAnon";

import Article from "./components/pages/Articles/Science/Article";
import ArticleSociety from "./components/pages/Articles/Society/ArticleSociety";

import CookieBot from "react-cookiebot";

function App() {
  const domainGroupId = "8dc9fd98-57eb-434c-813e-609e2aac3667";

  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/articles" exact component={Articles} />
        <Route path="/about" exact component={About} />
        <Route path="/membership" exact component={Membership} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/subscribe" exact component={Subscribe} />
        <Route path="/news" exact component={News} />
        <Route path="/society" exact component={Society} />
        <Route path="/society/article" exact component={ArticleSociety} />
        <Route path="/science" exact component={Science} />
        <Route path="/science/article" exact component={Article} />
        <Route path="/criminal" exact component={Criminal} />
      </Switch>
      <LogoAnon />

      <CookieBot domainGroupId={domainGroupId} />
    </Router>
  );
}

export default App;
