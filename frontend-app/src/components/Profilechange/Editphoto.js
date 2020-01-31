import "./Profilechange.css";

import React, { useState } from "react";

export default function Editphoto() {
  const [Image, setImage] = useState("");

  const handleChange = e => {
    let reader = new FileReader();

    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
      let fileBase = reader.result;

      setImage(`${fileBase}`);

      console.log(fileBase);
    };
  };

  return (
    <div>
      <input type="file" onChange={e => handleChange(e)} />

      <img className="profilephoto" src={Image} alt="Profile photo" />
    </div>
  );
}
