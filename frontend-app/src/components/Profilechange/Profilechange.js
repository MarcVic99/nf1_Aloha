import './Profilechange.css';

import React, {useEffect, useState} from 'react';

import {AuthContext} from "../../App";
import FooterLinks from "../footer/footer"
import Navbar from "./Navbar";
import Profilephoto from "./Profilephoto";

export default function ChangeProfile() {
    const {state, dispatch} = React.useContext(AuthContext);
    const [about, setAbout] = useState('');
    const [where, setWhere] = useState('');
    const [languages, setLanguages] = useState('');
    const [job, setJob] = useState('');
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');



    const data = {
        name:name,
        last_name:last_name,
        email:email,
        about: about,
        where: where,
        languages: languages,
        job: job,
        token: JSON.parse(localStorage.getItem('token'))
    };



    const handleOnSubmit = () => {

        const fetchdata = async (token) => {
            const url = `http://localhost/api/profile/edit`;

            const options = {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: new Headers({
                    Accept: 'application/json',
                    'Content-type': 'application/json',

                }),
                mode: 'cors',
            };
            return fetch(url, options)
                .then(response => {

                    if (response.status === 201) {
                        return response.json();
                    }
                    return Promise.reject(response.status);
                })
                .then(data => {

                    //alert("Succesful, codigo 200"); alert("Error.\n\nOptions body:\n" + options.body +"\n\nURL called:\n" + url +
                })
                .catch(error => {

                    setError(error);

                });
        };

        fetchdata();

    };
    useEffect(() => {
        if(state.user){
            setName(state.user.name);
            setLast_name(state.user.last_name);
            setEmail(state.user.email);
            setAbout(state.user.about);
            setWhere(state.user.where);
            setLanguages(state.user.languages);
            setJob(state.user.job);

        }
    }, [state.user]);

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
                    <h1>Hola {name}! </h1>

                  </div>

                  <div>
                    <div className="formlabel">
                      <label>Nombre</label>
                    </div>
                    <input
                      className="inputfield"
                      name="name"
                      spellCheck={true}
                      value={name}
                      onChange={event => setName(event.target.value)}
                      tabIndex="1"
                      required
                    />
                  </div>

                  <div>
                    <div className="formlabel">
                      <label>Apellido</label>
                    </div>
                    <input
                      className="inputfield"
                      type="text"
                      name="last_name"
                      spellCheck={true}
                      value={last_name}
                      onChange={event => setLast_name(event.target.value)}
                      tabIndex="2"
                      required
                    />
                  </div>

                  <div>
                    <div className="formlabel">
                      <label>Email</label>
                    </div>
                    <input
                      className="inputfield"
                      type="email"
                      name="email"
                      spellCheck={true}
                      value={email}
                      onChange={event => setEmail(event.target.value)}
                      tabIndex="3"
                      required
                    />
                  </div>

                  <div>
                    <div className="formlabel">
                      <label>Acerca de</label>
                    </div>
                    <textarea
                      className="aboutinfo"
                      name="about"
                      rows="4"
                      spellCheck={true}
                      value={about}
                      onChange={event => setAbout(event.target.value)}
                      tabIndex="4"
                    />
                  </div>
                  <div>
                    <div className="formlabel">
                      <label>Ubicación</label>
                    </div>
                    <input
                      className="inputfield"
                      name="where"
                      value={where}
                      onChange={event => setWhere(event.target.value)}
                      tabIndex="5"
                    />
                  </div>
                  <div>
                    <div className="formlabel">
                      <label>Trabajo</label>
                    </div>
                    <input
                      className="inputfield"
                      name="job"
                      type="job"
                      value={job}
                      onChange={event => setJob(event.target.value)}
                      tabIndex="7"
                    />
                  </div>
                  <div className="buttonmargin">
                    <div>
                      <button
                        tabIndex="8"
                        className="changebutton"
                        onClick={handleOnSubmit}
                      >
                        Guardar
                      </button>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <FooterLinks />
        </footer>
      </div>
    );
}


