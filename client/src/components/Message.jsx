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

    emailjs
      .send(
        "service_mwelobp",
        "template_oyae051",
        templateParams,
        "user_mOdU1UDxNSuDbnFQZ9Qh6"
      )
      .then(
        (result) => {
          toastr.success(
            "Your message was sent successfully! We'll get back to you soon"
          );
          console.log("YAY!", result.status, result.text);
        },
        (error) => {
          toastr.error(error);
          console.log("TROUBLE! ", error);
        }
      );

    this.setState({
      name: "",
      email: "",
      message: "",
    });
  };

  render() {
    return (
      <form
        id={this.props.id}
        className={this.props.className}
        name={this.props.name}
        method={this.props.method}
        action={this.props.action}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <input
            type="text"
            name="message"
            className="form-control"
            placeholder="Enter Your Message"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default Message;
