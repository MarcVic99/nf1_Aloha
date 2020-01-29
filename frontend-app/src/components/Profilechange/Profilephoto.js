import "./Profilechange.css";
import axios, { post } from 'axios';
import React, { useState } from "react";

import Avatar from "./Avatar";
import { Link } from "react-router-dom";

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
    <div className="photocellout">
      <div className="photocellin">
        <img className="profilephoto" src={Image} alt="Profile photo" />
        <div>
          <a className="photoupdate" aria-busy="false" style={{fontSize:"16px"}}>Actualizar foto
          <input
          type="file"
          onChange={e => handleChange(e)}
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
          style={{opacity:"0"}}
        />
          </a>


        </div>

        <hr />
        <div>
          <p>Número de teléfono</p>
        </div>
      </div>


    </div>
  );
}
