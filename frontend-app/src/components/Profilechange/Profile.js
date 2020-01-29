import React, { useState, useEffect } from 'react';
import './Profilechange.css';

import { AuthContext } from "../../App";
import FooterLinks from "../footer/footer"
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Profilephoto from "./Profilephoto";
import Addphoto from "./Profilephoto2";
import {APP_PROFILE_EDIT} from "../../routes/routes";
import WorkIcon from "@material-ui/icons/Work";


export default function Profile(props) {
    const bull = <span>•</span>;
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
            <div className="section">
                <div className="profile">
                    <Navbar class="header2" />
                    <div className="marginout1">

                        <Profilephoto />




                        <div className="changeform">
                            <div>

                                <div className="intro">
                                    <h1>Hola:Soy {name} {last_name} </h1>
                                    <div className="regedit">
                                        <p>Se registró en 2019 &nbsp; </p>{bull}

                                            <a className="editprofile" href={APP_PROFILE_EDIT}>Editar perfil</a>

                                        <div className="profileform">

                                        </div>
                                        <div className="profileform">
                                            <HomeIcon id="icon"/>
                                            Vive en: {where}


                                        </div>
                                        <div className="profileform">
                                            <WorkIcon fontSize="small" id="icon" />
                                            Trabaja en: {job}
                                        </div>
                                        <div className="profileform">
                                            <Link to="/users/reviews">
                                                Evaluaciones hechas por ti
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

