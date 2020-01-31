import React, {useEffect, useState} from 'react';
import './Profilechange.css';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Profilephoto from "./Profilephoto";
import FooterLinks from "../footer/footer"
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



    const data = {
        name:name,
        last_name:last_name,
        email:email,
        about: about,
        where: where,
        languages: languages,
        job: job,
        token: JSON.parse(localStorage.getItem('token'))
    }



    const handleOnSubmit = () => {

        const fetchdata = async () => {
            const url = `http://localhost/api/update`;

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
                                    <h1>Hola:{name} {last_name}</h1>
                                    <div className="regedit">
                                        <p>Se registró en 2019</p>
                                    </div>
                                </div>
                                <br />

                                <div>
                                    <div className="formlabel">
                                        <label>Nombre</label>
                                    </div>
                                    <textarea
                                        className="aboutinfo"
                                        name="name"
                                        rows="4"
                                        spellCheck={true}
                                        value={name}
                                        onChange={event => setName(event.target.value)}
                                        tabIndex="1"
                                    />
                                </div>
                                <br />

                                <div>
                                    <div className="formlabel">
                                        <label>Apellido</label>
                                    </div>
                                    <textarea
                                        className="aboutinfo"
                                        name="last_name"
                                        rows="4"
                                        spellCheck={true}
                                        value={last_name}
                                        onChange={event => setLast_name(event.target.value)}
                                        tabIndex="1"
                                    />
                                </div>
                                <br />

                                <div>
                                    <div className="formlabel">
                                        <label>Email</label>
                                    </div>
                                    <textarea
                                        className="aboutinfo"
                                        name="email"
                                        rows="4"
                                        spellCheck={true}
                                        value={email}
                                        onChange={event => setEmail(event.target.value)}
                                        tabIndex="1"
                                    />
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
            <footer>

                <FooterLinks />

            </footer>
        
        </div>
    );
}


