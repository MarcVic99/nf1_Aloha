import React, { useState } from 'react';
import './Profilechange.css';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Profilephoto from "./Profilephoto";
import FooterLinks from "../footer/footer"
import {getToken} from "../../utils/localstorage";


export default function ChangeProfile() {
    const [about, setAbout] = useState('');
    const [where, setWhere] = useState('');
    const [languages, setLanguages] = useState('');
    const [job, setJob] = useState('');
    const [error, setError] = useState('');



    const data = {
        about: about,
        where: where,
        languages: languages,
        job: job,
    }


    const handleOnChange = () => {

        const fetchdata = async () => {
            const url = `localhost:80/api/profileinfo/?token=${getToken()}`;

            const options = {
                method: 'GET',
                body: JSON.stringify(data),
                headers: new Headers({
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                    //'Access-Control-Allow-Headers': 'Authorization',

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


                                    </div>
                                </div>
                                <br />
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
                                        tabIndex="1"
                                    />
                                </div>
                                <br />
                                <div>
                                    <div className="formlabel">
                                        <label>Ubicación</label>
                                    </div>
                                    <input


                                        className="inputfield"
                                        name="where"
                                        value={where}
                                        onChange={event => setWhere(event.target.value)}
                                        tabIndex="2"
                                    />
                                </div>
                                <br />
                                <div>
                                    <div className="formlabel">
                                        <label>Idiomas que hablo</label>
                                    </div>
                                    <input

                                        className="inputfield"
                                        name="languages"
                                        value={languages}
                                        onChange={event => setLanguages(event.target.value)}
                                        tabIndex="3"
                                    />
                                </div>
                                <br />
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
                                        tabIndex="5"
                                    />
                                </div>
                                <br />
                                <div className="buttonmargin">
                                    <div>
                                        <button tabIndex="6" className="changebutton" onClick={handleOnChange}>Guardar</button>
                                        <button tabIndex="7" className="cancelbutton" onClick={handleOnChange}>Cancelar</button>
                                    </div>
                                </div>
                                <div >
                                    <hr />
                                    <br />
                                    <div className="editprofile">
                                        <Link to='/users/reviews'>Evaluaciones hechas por ti</Link>
                                    </div>
                                    <hr />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br/>
            <footer>

                <FooterLinks />

            </footer>
        
        </div>
    );
}


