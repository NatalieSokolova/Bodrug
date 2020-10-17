import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import history from "browser-history";
import useApplicationData from "./hooks/useApplicationData";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Art from "./components/Art";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  const { state, setState } = useApplicationData();

  // const userList = state.users.map((user) => (
  //   <li>
  //     {user.name} {user.email}
  //   </li>
  // ));

  return (
    <Router>
      <Nav />
      <div>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/art" component={Art} />
          <Route path="/faq" component={Faq} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
