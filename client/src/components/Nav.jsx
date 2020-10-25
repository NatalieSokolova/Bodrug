import React from "react";
import { Menu } from "antd";
import "./Nav.css";

const { SubMenu } = Menu;

export default class Nav extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        className="nav"
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Menu.Item>
          {/* <a href="/" rel="noopener noreferrer">
            HOME
          </a> */}
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
        <Menu.Item>
          <a href="/about" rel="noopener noreferrer">
            ABOUT
          </a>
        </Menu.Item>
        <SubMenu key="SubMenu" title="PHOTOS">
          <Menu.Item key="setting:1">
            <a href="/photos" rel="noopener noreferrer">
              portfolio
            </a>
          </Menu.Item>
          <Menu.Item key="setting:2">
            <a href="/pricing" rel="noopener noreferrer">
              pricing
            </a>
          </Menu.Item>
        </SubMenu>
        <Menu.Item>
          <a href="/art" rel="noopener noreferrer">
            ART
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href="/faq" rel="noopener noreferrer">
            FAQ
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href="/contact" rel="noopener noreferrer">
            CONTACT
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}
