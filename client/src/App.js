import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { ToastContainer, toast } from "react-toastify";

import Nav from "./components/Nav";
import About from "./components/About";
import Photo from "./components/Photo";
import Pricing from "./components/Pricing";
import Painting from "./components/Painting";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { Layout } from "antd";
import "./components/Footer.css";

const { Footer } = Layout;

function App() {
  return (
    <Router>
      <Nav />
      <div>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/photos" component={Photo} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/art" component={Painting} />
          <Route path="/faq" component={Faq} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
      <Layout>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
