import React, { useState } from "react";
import "./Profilechange.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Profilephoto from "./Profilephoto";
import FooterLinks from "../footer/footer";

export default function Profile() {
  const [about, setAbout] = useState("");
  const [where, setWhere] = useState("");
  const [languages, setLanguages] = useState("");
  const [job, setJob] = useState("");
  const [error, setError] = useState("");

  const data = {
    about: about,
    where: where,
    languages: languages,
    job: job
  };

  const handleOnChange = () => {
    const fetchdata = async () => {
      const url = "localhost:80/api/profile/";

      const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
          Accept: "application/json",
          "Content-type": "application/json"
          //'Access-Control-Allow-Headers': 'Authorization',
        }),
        mode: "cors"
      };
      return fetch(url, options)
        .then(response => {
          if (response.status === 201) {
            alert(response.statusText);
            return response.json();
          }
          return Promise.reject(response.status);
        })
        .then(data => {
          //alert("Succesful, codigo 200"); alert("Error.\n\nOptions body:\n" + options.body +"\n\nURL called:\n" + url +
        })
        .catch(error => {
          setError(error);
          alert("sdf " + error);
        });
    };

    fetchdata();
  };

  return (
    <div id="main">
      <section>
        <div>
          <Navbar />
          <div className="marginout">
            <Profilephoto />

            <div className="changeform">
              <div>
                <div className="intro">
                  <h1>Hola:Soy Zsofia</h1>
                  <div className="regedit">
                    <p>Se registró en 2019</p>

                    <div className="editprofile">
                      <Link to="/profile/edit">Editar perfil</Link>
                    </div>
                    <div className="profileform"></div>
                    <div className="profileform">Vive en: Barcelona</div>
                    <div className="profileform">Trabaja en: Informatica</div>
                    <div className="profileform">
                      Destinos favoritos: Bali, Tailandia
                    </div>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer>
        <FooterLinks />
      </footer>
    </div>
  );
}
