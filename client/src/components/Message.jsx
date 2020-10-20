import React, { Component } from "react";
import * as emailjs from "emailjs-com";
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
    console.log(target);
  };

  validateMail() {
    let errors = {};
    let formIsValid = true;

    if (!this.state.name || this.state.name.length < 1) {
      errors.name = "Please, enter your name";
      formIsValid = false;
    }

    let pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
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
  }

  sendEmail(event) {
    event.preventDefault();

    if (!this.validateMail()) {
      return;
    }

    const templateParams = {
      name: `${this.state.name} (${this.state.email})`,
      message: this.state.message,
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
          alert(
            "Your message was sent successfully! We'll get back to you soon"
          );
          // toastr.success(
          //   "Your message was sent successfully! We'll get back to you soon"
          // );
          console.log("YAY!", result.status, result.text);
        },
        (error) => {
          // toastr.error(error);
          alert("Sorry, your email was not sent. Please, try again");
          console.log("TROUBLE! ", error);
        }
      );

    this.setState({
      name: "",
      email: "",
      message: "",
    });
  }

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
            required="required"
            onChange={this.handleInputChange.bind(this)}
            value={this.state.name}
            error={this.state.errors.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter Your Email"
            required="required"
            onChange={this.handleInputChange.bind(this)}
            value={this.state.email}
            error={this.state.errors.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <input
            type="text"
            name="message"
            className="form-control"
            placeholder="Enter Your Message"
            required="required"
            onChange={this.handleInputChange.bind(this)}
            value={this.state.message}
            error={this.state.errors.message}
          />
        </div>
        <button
          type="button"
          name="submit"
          className="btn btn-primary"
          required="required"
          onClick={this.sendEmail.bind(this)}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default Message;
