import "./Profilechange.css";

import React, { useEffect, useState } from "react";

import { AuthContext } from "../../App";
import FaceIcon from "@material-ui/icons/Face";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import Navbar from "../Header/Navbar";
import WorkIcon from "@material-ui/icons/Work";
import Uploadfile from "./Uploadfile";

export default function Profile() {
  const { state, dispatch } = React.useContext(AuthContext);
  const [about, setAbout] = useState("");
  const [where, setWhere] = useState("");
  const [languages, setLanguages] = useState("");
  const [job, setJob] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (state.user) {
      setName(state.user.name);
      setLast_name(state.user.last_name);
      setEmail(state.user.email);
      setAbout(state.user.about);
      setWhere(state.user.where);
      setLanguages(state.user.languages);
      setJob(state.user.job);
    }
  });

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
            return response.json();
          }
          return Promise.reject(response.status);
        })
        .then(data => {})
        .catch(error => {
          setError(error);
        });
    };

    fetchdata();
  };

  return (
    <div id="main">
      <section>
        <div>
          <Navbar class="header2" />
          <div className="marginout">
            <Uploadfile />

            <div className="changeform">
              <div>
                <div className="intro">
                  <h1>Hola: Soy {name} </h1>
                  <div className="regedit">
                    <p>Se registró en 2019</p>
                    <div className="editprofile">
                      <Link to="/profile/edit" style={{ marginLeft: "12px" }}>
                        Editar perfil
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="profileform">
                  <FaceIcon fontSize="small" id="icon" />

                  {about}
                </div>
                <div className="profileform">
                  <HomeIcon id="icon" />
                  {where}
                </div>

                <div className="profileform">
                  <WorkIcon fontSize="small" id="icon" />
                  {job}
                </div>

                <div>
                  <hr />
                  <br />
                  <div className="editprofile">
                    <Link to="/users/reviews">Evaluaciones hechas por ti</Link>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
