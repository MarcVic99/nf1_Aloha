import React, {useState} from 'react';

import FormGeneral from "./Components/formComponent";
import StartSession from "./Components/Button";

import './SignInStyle.css';

function SignIn() {
    const [name, setName] = useState('');
    const [last_name, setLast_Name] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const data = {
        name: name,
        last_name: last_name,
        email: email,
        password: password
    }
// FETCH ES UNA LIBRERIA js QUE TE PERMITE HACER POSTS, GETS, ... ES ASINCRONA YA QUE PERMITE CONETAR CON BACKEND SIN TENER QUE REFRESCAR A URL O CAMBIARLA.

    const handleSubmit = () =>{
        const fetchdata = async() => {
            const url ="http://127.0.0.1:80/api/v1/post";
            const options = {
                method: 'POST',
                body: JSON.stringify(data),
                header: new Headers({
                    Accept:'application/json',
                    'Content-type': 'application/json',
                }),
                mode:'cors'
            }
            return fetch(url,options)
                .then(response=>{
                    if(response.status == 201){
                        alert(response.statusText);
                        return response.json();
                    }
                    return Promise.reject(response.status);
                }). catch(error =>{
                    setError(error);
                    alert(error);// Este catch nos ejecuta algo cuándo no hay respuesta

                });
        };

    }

    return(
        <div>
            <form>

                <input value={name} onChange={e => setName(e.target.value)} type={"text"}/>
                <input value={last_name} onChange={e => setLast_Name(e.target.value)} type={"text"}/>
                <input value={email} onChange={e => setEmail(e.target.value)} type={"text"}/>
                <input value={password} onChange={e => setPassword(e.target.value)} type={"password"}/>
                <input type={"submit"} onClick={handleSubmit}/>


            </form>

        </div>
    )

}
/*
const SignIn = () =>(

    <div id={'divGeneral'}>

        <FormGeneral/>


        <StartSession/>


    </div>
);
 */
export default SignIn;

