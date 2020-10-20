// import React, { useEffect } from "react";
// import { useAlert } from "react-alert";
// import { useForm } from "react-hook-form";
// import emailjs from "emailjs-com";
// import "./Message.css";

import React, { Component } from "react";
import toastr from "toastr";
import * as emailjs from "emailjs-com";
import "jquery";
import "./Message.css";

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      errors: {
        name: "",
        email: "",
        message: "",
      },
    };
  }

  handleInputChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });

    console.log(this.state);
  };

  validateMail = () => {
    let errors = {};
    let formIsValid = true;

    if (!this.state.name || this.state.name.length < 1) {
      errors.name = "Please, enter your name";
      formIsValid = false;
    }

    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!pattern.test(this.state.email)) {
      errors.email = "Please, enter a valid email";
      formIsValid = false;
    }

    this.setState({
      errors: errors,
    });

    if (!this.state.message || this.state.message.length < 5) {
      errors.message = "Your message needs to be longer, than 5 characters!";
      formIsValid = false;
    }

    return formIsValid;
  };

  sendEmail = (event) => {
    event.preventDefault();

    if (!this.validateMail()) {
      return;
    }

    const templateParams = {
      from_name: `${this.state.name} (${this.state.email})`,
      to_name: "Yuliia Bodrug",
      message_html: this.state.message,
    };
  };
}

export default Message;
