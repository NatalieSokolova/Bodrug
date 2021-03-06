import React, { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SimpleReactLightbox from "simple-react-lightbox";
import { CloudinaryContext } from "cloudinary-react";

import Nav from "./components/Nav";
import About from "./components/About";
import Photo from "./components/Photo";
import Pricing from "./components/Pricing";
import Painting from "./components/Painting";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Collection from "./components/Collection";
import Story from "./components/Story";
import Blog from "./components/Blog";
import SelectedBlog from "./components/SelectedBlog";
import AdminDashboard from "./components/AdminDashboard";
import LoginForm from "./components/LoginForm";
import ScrollBtn from "./components/ScrollBtn";
import { Layout } from "antd";
import "./components/Footer.css";
import { InstagramOutlined } from "@ant-design/icons";

const { Footer } = Layout;

function App() {
  const [blog, setBlog] = useState(null);
  const [auth, setAuth] = useState({
    username: "",
    password: "",
  });

  return (
    <SimpleReactLightbox>
      <CloudinaryContext cloudName="nataliesklv">
        <Router>
          <Nav />
          <div>
            <Switch>
              <Route path="/blog/:slug">
                <SelectedBlog blog={blog} setBlog={setBlog} />
              </Route>
              <Route path="/blog">
                <Blog blog={blog} setBlog={setBlog} />
              </Route>
              <Route path="/about" component={About} />
              <Route path="/photos" component={Photo} />
              <Route path="/collections" component={Collection} />
              <Route path="/stories" component={Story} />
              <Route path="/pricing" component={Pricing} />
              <Route path="/art" component={Painting} />
              <Route path="/faq" component={Faq} />
              <Route path="/contact" component={Contact} />
              <Route exact path="/" component={Home} />
              {/* <Route path="/admin" component={AdminDashboard} />
            <Route path="/login" component={LoginForm} /> */}

              <Route path="/admin">
                <AdminDashboard auth={auth} setAuth={setAuth} />
              </Route>
              <Route path="/login">
                <LoginForm auth={auth} setAuth={setAuth} />
              </Route>
            </Switch>
          </div>
          <Layout>
            <Footer className="footer">
              {/* <ScrollBtn /> */}
              <div>
                <span>Iuliia Bodrug ©2020 </span>
                <a
                  href="https://www.instagram.com/bodrug_photo/?hl=en"
                  className="insta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramOutlined />
                </a>
              </div>
            </Footer>
          </Layout>
        </Router>
      </CloudinaryContext>
    </SimpleReactLightbox>
  );
}

export default App;
