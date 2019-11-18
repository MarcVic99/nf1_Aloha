import React, { useState,useEffect } from 'react';
import './LogIn.css'

function LogIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState('');
    const [error, setError] = useState('');

    const data = {
        email: email,
        password: password
    }

    const handleSubmit = () => {
        const fetchdata = async () => {
            const url ='https://127.0.0.1:8080/login';
            const options = {
                method: 'POST',
                body: JSON.stringify(data),
                header: new Headers({
                    Accept:'application/json',
                    'Content-type': 'application/json',
                }),
                mode:'cors'
            }

            return fetch(url, options)
                .then(response => {
                    if (response.status == 200) {
                        alert();
                        console.log(response);
                    }
                    return Promise.reject(response.status);
                }).catch(error => {
                    setError(error);
                    alert(error);// Este catch nos ejecuta algo cuándo no hay respuesta

                });

        }
        fetchdata()
    }

    return (
        <div>
            <div className="borde">
                <div className="marginout">
                    <div className="marginin">

                        <div className="mainform">
                            <form method="post" action='/backend-api/app/Http/Controllers/GetsController.php'>

                                <div>
                                    <h4> ~ Aloha ~</h4>
                                    <br/>
                                    <hr></hr>
                                </div>
                                <br/>
                                <br/>
                                <input
                                    className="inputfield"
                                    name="email"
                                    placeholder="Dirección de correo electrónico"
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                    required

                                />
                                <br/>

                                <input
                                    className="inputfield"
                                    name="name"
                                    placeholder="Contraseña"
                                    value={password}
                                    onChange={event => setPassword(event.target.value)}
                                    required


                                />
                                <br/>
                                <label>
                                    <input type="checkbox"
                                           name="hasAgreed"
                                           value={remember}
                                           onChange={event => setRemember(event.target.value)}

                                    />
                                    <p2>Recordarme</p2>
                                </label>

                            </form>
                            <div className="buttonmargin">

                                <div>

                                    <button type="submit" onClick={handleSubmit} className="submitbutton">Inicia
                                        Sesión
                                    </button>


                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )

}


export default LogIn;