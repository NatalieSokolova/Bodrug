import React, { useState } from "react";
import { Menu } from "antd";
import "./Nav.css";

const { SubMenu } = Menu;

export default function Nav(props) {
  // state = {
  //   current: "mail",
  // };

  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  // const { current } = state;
  return (
    <Menu
      className="nav"
      onClick={handleClick}
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
      <SubMenu key="SubMenu" title="PHOTOS" className="submenu">
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
