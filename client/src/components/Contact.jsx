import React, { useState, useEffect } from "react";
import axios from "axios";
import EmailForm from "./EmailForm";

export default function Contact({}) {
  return (
    <div>
      <h1>email me:</h1>
      <div>
        <EmailForm />
      </div>
      <h1>phone??</h1>
      <h1>social media?</h1>
      <h1>something else</h1>
    </div>
  );
}
