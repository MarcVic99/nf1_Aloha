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
        about: about,
        where: where,
        languages: languages,
        job: job,
    }


    const handleOnChange = () => {

        const fetchdata = async () => {
            const url = 'localhost:80/api/profile/';

            const options = {
                method: 'POST',
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
                                    <h1>Hola:Soy {name} {last_name} </h1>
                                    <div className="regedit">
                                        <p>Se registró en 2019</p>

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
                                            Destinos favoritos: Bali, Tailandia
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>

            {/* Footer */}
            <footer>

                <FooterLinks />

            </footer>
        </div>
    );
}

