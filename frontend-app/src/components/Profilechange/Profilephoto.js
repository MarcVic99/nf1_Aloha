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
    <div className="photocellout">
      <div className="photocellin">
        <div className="profilephoto">
          <img src={Image} className="profilephoto" alt="Profile photo" />
        </div>
        <div>
          <div className="upload-btn-wrapper">
            <button className="btn">Actualizar foto</button>
            <input
              type="file"
              onChange={e => handleChange(e)}
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
              style={{ opacity: "0" }}
            />
          </div>
        </div>

        <hr />
        <div style={{ padding: "5px" }}>
          <p>Número de telefono</p>
        </div>
      </div>
    </div>
  );
}
