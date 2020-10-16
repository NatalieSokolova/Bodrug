import React, { Component } from "react";
import { Menu, Dropdown } from "semantic-ui-react";

export default class MenuExampleText extends Component {
  state = { activeItem: "closest" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu text>
        {/* <Menu.Item header>Sort By</Menu.Item> */}
        <Menu.Item
          name="HOME"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
          href="/"
        />
        <Dropdown item text="PHOTOS">
          <Dropdown.Menu>
            <Dropdown.Item href="/portfolio">portfolio</Dropdown.Item>
            <Dropdown.Item href="/pricing">pricing</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item
          name="ART"
          active={activeItem === "art"}
          onClick={this.handleItemClick}
          href="/art"
        />
        <Menu.Item
          name="FAQ"
          active={activeItem === "faq"}
          onClick={this.handleItemClick}
          href="/faq"
        />
        <Menu.Item
          name="CONTACT"
          active={activeItem === "contact"}
          onClick={this.handleItemClick}
          href="/contact"
        />
      </Menu>
    );
  }
}
