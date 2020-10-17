import React from "react";
import { Menu } from "antd";

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
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item>
          <a href="/" rel="noopener noreferrer">
            HOME
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href="/about" rel="noopener noreferrer">
            ABOUT
          </a>
        </Menu.Item>
        <SubMenu key="SubMenu" title="PHOTOS">
          <Menu.Item key="setting:1">
            <a href="/portfolio" rel="noopener noreferrer">
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
          <a href="/contact" rel="noopener noreferrer">
            CONTACT
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}
