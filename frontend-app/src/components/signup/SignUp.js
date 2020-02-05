import React, { useState,useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import './SignUp.css';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


export default function SignUp( props) {

    const { handleOpenLogIn } = props;


    const [name, setName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_pass, setConfirmPass] = useState();
    const [hasagreed, setHasAgreed] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setshowPassword] = React.useState(false);
    const [showPassword2, setshowPassword2] = React.useState(false);

    const data = {
        name: name,
        last_name: last_name,
        email: email,
        password: password,
        confirm_pass: confirm_pass
    }

    const handleClickShowPassword = () => {
        setshowPassword({...showPassword, showPassword: !showPassword.showPassword});
    };

    const handleClickShowPassword2 = () => {
        setshowPassword2({ ...showPassword2, showPassword2: !showPassword2.showPassword2});
    };


    const handleOnSubmit = () => {
        const fetchdata = async () => {
            const url = 'http://127.0.0.1:80/api/signUp';
            const options = {
                method: 'post',
                body: JSON.stringify(data),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    //'Access-Control-Allow-Headers': 'Authorization',
                },
                mode: 'cors',
            };

            fetch(url, options)

                .then(response => {
                    if (response.status === 404) {
                        response.json().then((resp => {
                            return setError(resp.errors);
                            //return Promise.reject(alert(resp.errors))
                        }))
                    } else if (response.status === 200) {
                        response.json().then((resp => {
                            //console.warn("resp",resp);
                            setError('');
                            return Promise.reject(alert(`Bienvenido ${name} `))

                        }))

                    }
                }).catch(error => {
                setError(error);
                alert(error);// Este catch nos ejecuta algo cuándo no hay respuesta

            });

        };

        fetchdata()
    }


    return (
        <Container component="main" maxWidth="xs" className={'contain'}>
            <div>
                <form>
                    <Grid container spacing={2}>

                        <Grid item xs={12} align={"center"} className={"o"}>
                            <hr className="hr"/>
                            <p className="letrao">o</p>

                        </Grid>

                        <Typography component="h1" variant="h5" className={"titleSignUp"}>
                            Regístrate con &nbsp;

                            <FacebookLogin
                                id="facebook"
                                appId="1088597931155576"
                                autoLoad={false}
                                textButton="Facebook"
                                fields="name,email,picture"
                                scope="public_profile,user_friends,user_actions.books"
                                size="200px"

                            />
                            &nbsp;
                            <GoogleLogin
                                className="google"
                                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                buttonText="Google"
                                onSuccess={''}
                                onFailure={''}
                                cookiePolicy={'single_host_origin'}
                            />

                        </Typography>

                        <Grid item xs={12}>
                            <TextField
                                autoComplete="name"
                                name="name"
                                variant="outlined"
                                fullWidth
                                id="name"
                                label="Nombre"
                                value={name}
                                onChange={event => setName(event.target.value)}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="last_name"
                                label="Apellido"
                                name="last_name"
                                autoComplete="last_name"
                                value={last_name}
                                onChange={event => setLastName(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Dirección de correo electrónico"
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Establece una contraseña"
                                required
                                fullWidth
                                id="password"
                                type={showPassword.showPassword? 'text' : 'password'}
                                value={password}
                                autoComplete="current-password"
                                onChange={event => setPassword(event.target.value)}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            size={"small"}
                                        >
                                            {showPassword.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Repite la contraseña"
                                required
                                fullWidth
                                id="password"
                                type={showPassword2.showPassword2 ? 'text' : 'password'}
                                value={confirm_pass}
                                autoComplete="current-password"
                                onChange={event => setConfirmPass(event.target.value)}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword2}
                                            size={"small"}
                                        >
                                            {showPassword2.showPassword2 ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12} >

                            <p className={"error"}> {error} </p>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                label="No quiero recibir mensajes de promociones de Airbnb. También puedo optar por desactivarlos en la configuración de mi cuenta o a través del enlace del mensaje."
                                name="hasAgreed"
                                value={hasagreed}
                                onChange={event => setHasAgreed(event.target.value)}
                            />
                        </Grid>
                    </Grid>
                </form>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    text-transform="none"
                    color="secondary"
                    size="medium"
                    className={'boton'}
                    onClick={handleOnSubmit}
                >
                    Regístrate
                </Button>

                <Grid container justify="flex-start">
                    <Grid item>
                        <span>¿Ya tienes una cuenta de Airbnb? </span>

                        <Link onClick={handleOpenLogIn} className="open link">
                            Inicia sesión
                        </Link>
                    </Grid>
                </Grid>
            </div>

        </Container>
    );
}