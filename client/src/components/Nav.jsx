import React from "react";
import { Menu } from "antd";
import classnames from "classnames";
import "./Nav.css";

const { SubMenu } = Menu;

export default class Nav extends React.Component {
  state = {
    current: "mail",
    prevScrollpos: window.pageYOffset,
    visible: true,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        className={classnames("navbar", {
          "navbar--hidden": !this.state.visible,
        })}
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Menu.Item className="nav-item">
          <a href="/" rel="noopener noreferrer">
            <img
              src={require("../assets/logo-border.png")}
              alt="by Yuliia Bodrug"
              style={{
                height: "2.5em",
                width: "auto",
              }}
            />
          </a>
        </Menu.Item>
        <Menu.Item className="nav-item">
          <a href="/about" rel="noopener noreferrer">
            ABOUT
          </a>
        </Menu.Item>
        <SubMenu key="SubMenu" title="PHOTOS" className="nav-item">
          <Menu.Item key="setting:1" className="nav-item">
            <a href="/photos" rel="noopener noreferrer">
              portfolio
            </a>
          </Menu.Item>
          <Menu.Item key="setting:2" className="nav-item">
            <a href="/pricing" rel="noopener noreferrer">
              pricing
            </a>
          </Menu.Item>
        </SubMenu>
        <Menu.Item className="nav-item">
          <a href="/art" rel="noopener noreferrer">
            ART
          </a>
        </Menu.Item>
        <Menu.Item className="nav-item">
          <a href="/faq" rel="noopener noreferrer">
            FAQ
          </a>
        </Menu.Item>
        <Menu.Item className="nav-item">
          <a href="/contact" rel="noopener noreferrer">
            CONTACT
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}
