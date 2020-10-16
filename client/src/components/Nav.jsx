import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

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
        />
        <Menu.Item
          name="PHOTOS"
          active={activeItem === "photos"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="ART"
          active={activeItem === "art"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="FAQ"
          active={activeItem === "faq"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="CONTACT"
          active={activeItem === "contact"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
