import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import SimpleReactLightbox from "simple-react-lightbox";

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
import { InstagramOutlined } from "@ant-design/icons";

const { Footer } = Layout;

function App() {
  return (
    <SimpleReactLightbox>
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
          <Footer className="footer">
            <div>
              <span>Yuliia Bodrug ©2020 </span>
              <a
                href="https://www.instagram.com/bodrug_photo/?hl=en"
                className="insta"
                target="_blank"
              >
                <InstagramOutlined />
              </a>
            </div>
          </Footer>
        </Layout>
      </Router>
    </SimpleReactLightbox>
  );
}

export default App;
