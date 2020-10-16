import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import history from "browser-history";
import useApplicationData from "./hooks/useApplicationData";
import "./App.css";

import About from "./components/About";
import Photo from "./components/Photo";
import Gallery from "./components/Gallery";
import Faq from "./components/Faq";
import Contact from "./components/Contact";

function App() {
  const { state, setState } = useApplicationData();

  // const userList = state.users.map((user) => (
  //   <li>
  //     {user.name} {user.email}
  //   </li>
  // ));

  return (
    <Router>
      <div>NAV goes here</div>
      <div>
        <Switch>
          <Route path="/about" component={About} />
          {/* Photo component will contail links to portfolio, pricing and FAQs */}
          <Route path="/photo" component={Photo} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/faq" component={Faq} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
