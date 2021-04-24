import React from "react";
import "./App.css";

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
import MembershipMenu from "./components/pages/Membership/MembershipMenu";
import { LogoAnon } from "./components/LogoAnon";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/articles" exact component={Articles} />
        <Route path="/about" exact component={About} />
        <Route path="/membership" exact component={MembershipMenu} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/subscribe" exact component={Subscribe} />
        <Route path="/news" exact component={News} />
        <Route path="/society" exact component={Society} />
        <Route path="/science" exact component={Science} />
        <Route path="/criminal" exact component={Criminal} />
      </Switch>
      <LogoAnon />
    </Router>
  );
}

export default App;
