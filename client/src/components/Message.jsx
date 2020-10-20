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

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });

    console.log(this.state);
  }
}

export default Message;
