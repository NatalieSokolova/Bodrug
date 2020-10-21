import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as emailjs from "emailjs-com";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "./Message.css";

function Message(props) {
  const { register, handleSubmit, errors } = useForm();

  // toast.configure();
  // const notify = () =>
  //   toast.dark("🦄 Wow so easy!", {
  //     position: "top-right",
  //     autoClose: false,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     transition: "zoom",
  //   });

  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    errors: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleInputChange = async (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    await setValues({
      ...values,
      [name]: value,
    });

    console.log("NAME: ", name);
    console.log(target);
  };

  const validateMail = () => {
    let formIsValid = true;

    if (!values.name || values.name.length < 1) {
      values.errors.name = "Please, enter your name";
      formIsValid = false;
    }

    setValues({
      ...values,
      errors: values.errors,
    });

    let pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!pattern.test(values.email)) {
      values.errors.email = "Please, enter a valid email";
      formIsValid = false;
    }

    setValues({
      ...values,
      errors: values.errors,
    });

    if (!values.message || values.message.length < 5) {
      values.errors.message =
        "Your message needs to be longer, than 5 characters!";
      formIsValid = false;
    }

    setValues({
      ...values,
      errors: values.errors,
    });
    console.log("ERRORS?", values.errors);
    return formIsValid;
  };

  const sendEmail = (event) => {
    // event.preventDefault();
    console.log("submitting");

    if (!validateMail()) {
      return alert("Sorry - the form is invalid");
    }

    const templateParams = {
      name: `${values.name} (${values.email})`,
      email: values.email,
      message: values.message,
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

          console.log("YAY!", result.status, result.text);
        },
        (error) => {
          alert("Sorry, your email was not sent. Please, try again");

          console.log("TROUBLE! ", error);
        }
      );

    setValues({
      name: "",
      email: "",
      message: "",
      errors: {
        name: "",
        email: "",
        message: "",
      },
    });

    console.log("VALUES: ", values);
  };

  return (
    <form
      id={props.id}
      className={props.className}
      name={props.name}
      method={props.method}
      action={props.action}
      onSubmit={handleSubmit(sendEmail)}
    >
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Enter Your Name"
          ref={register({ required: true })}
          onChange={handleInputChange}
          value={values.name}
        />
        {errors.name && <span id="error">Please, enter your name</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter Your Email"
          ref={register({ required: true })}
          onChange={handleInputChange}
          value={values.email}
        />
        {errors.email && <span id="error">Please, enter your email</span>}
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <input
          type="text"
          name="message"
          className="form-control"
          placeholder="Enter Your Message"
          ref={register({ required: true })}
          onChange={handleInputChange}
          value={values.message}
        />
        {errors.message && (
          <span id="error">Sorry, you cannot submit an empty message</span>
        )}
      </div>
      <button
        type="submit"
        name="submit"
        className="btn btn-primary"
        required="required"
      >
        Submit
      </button>
    </form>
  );
}

export default Message;
