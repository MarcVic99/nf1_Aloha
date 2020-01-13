import React, {useEffect, useState} from 'react';
import './Profilechange.css';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Profilephoto from "./Profilephoto";
import FooterLinks from "../footer/footer"
import {getToken} from "../../utils/localstorage";
import {AuthContext} from "../../App";


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






    const handleOnSubmit = () => {

        const fetchdata = async () => {
            const data = {
                name:name,
                last_name:last_name,
                email:email,
                about: about,
                where: where,
                languages: languages,
                job: job,
            }

            const url = 'http://127.0.0.1:80/api/profile/edit';

            const options = {

                method:'PUT',
                body: JSON.stringify(data),
                headers: new Headers({
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                    //'Access-Control-Allow-Headers': 'Authorization',

                }),
                mode: 'cors',
            };
            debugger;
            return fetch(url, options)
                .then(response => {
    debugger;
                    if (response.status === 201) {
                        return response.json();
                    }
                    return Promise.reject(response.status);
                })
                .then(data => {
                    setAbout(data.about);
                    //setWhere(data.)
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
            setJob(state.user.job);
            setWhere(state.user.where);

        }
    });

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
                                    <h1>Hola:Soy {name}</h1>

                                </div>
                                <br />
                                <div>
                                    <div className="formlabel">
                                        <label>Name </label>
                                    </div>
                                    <input


                                        className="inputfield"
                                        name="name"
                                        defaultValue={name}
                                        onChange={event => setName(event.target.value)}
                                        tabIndex="1"
                                    />
                                </div>
                                <br/>
                                <div>
                                    <div className="formlabel">
                                        <label>Last name </label>
                                    </div>
                                    <input


                                        className="inputfield"
                                        name="last_name"
                                        defaultValue={last_name}
                                        onChange={event => setLast_name(event.target.value)}
                                        tabIndex="2"
                                    />
                                </div>
                                <br/>
                                <div>
                                    <div className="formlabel">
                                        <label>Email</label>
                                    </div>
                                    <input


                                        className="inputfield"
                                        name="email"
                                        defaultValue={email}
                                        onChange={event => setEmail(event.target.value)}
                                        tabIndex="3"
                                    />
                                </div>
                                <br/>
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
                                        tabIndex="5"
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
                                        tabIndex="6"
                                    />
                                </div>
                                <br />
                                <div className="buttonmargin">
                                    <div>
                                        <button tabIndex="6" className="changebutton" onClick={handleOnSubmit}>Guardar</button>
                                        {/*<button tabIndex="7" className="cancelbutton" onClick={handleOnChange}>Cancelar</button>*/}
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
            <br/>
            <br/>
            <footer>

                <FooterLinks />

            </footer>

        </div>
    );
}
