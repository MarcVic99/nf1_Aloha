import React, { useState, useEffect } from 'react';
import './Profilechange.css';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Profilephoto from "./Profilephoto";

import FooterLinks from "../footer/footer"
import {AuthContext} from "../../App";



export default function Profile() {
    const {state, dispatch} = React.useContext(AuthContext);
    const [about, setAbout] = useState('');
    const [where, setWhere] = useState('');
    const [languages, setLanguages] = useState('');
    const [job, setJob] = useState('');
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [created_at,setCreated_at]=useState('');

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
    });

    const data = {
        name:name,
        last_name:last_name,
        email:email,
        about: about,
        where: where,
        languages: languages,
        job: job,
        created_at:created_at,
    }




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
                                    <h1>Hola:Soy {name} </h1>
                                    <div className="regedit">
                                        <p>Se registró en {created_at} 2019</p>

                                        <div className="editprofile">
                                            <Link to="/profile/edit">Editar perfil</Link>
                                        </div>
                                        <div className="profileform">



                                        </div>
                                        <div className="profileform">
                                            Vive en: {where}


                                        </div>
                                        <div className="profileform">
                                            Trabaja en: {job}
                                        </div>
                                        <div className="profileform">
                                            Idiomas: {languages}
                                        </div>
                                        <div className="profileform">
                                            Cerca de: {about}

                                        </div>
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

