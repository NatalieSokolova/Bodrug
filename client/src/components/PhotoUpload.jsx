import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function PhotoUpload() {
  toast.configure();

  return (
    <div>
      <div>PHOTO UPLOAD</div>
      <script
        src="https://widget.cloudinary.com/v2.0/global/all.js"
        type="text/javascript"
      ></script>
    </div>
  );
}
