import React, { useState,useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './SignUp.css';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {

    const classes = useStyles();

    const [email, setEmail] = useState ('');
    const [name, setName] = useState('');
    const [last_name, setLastName] = useState ('');
    const [password, setPassword] = useState('');
    const [hasagreed, setHasAgreed] = useState('');
    const [error, setError] = useState('');
    const [confirm_pass, setConfirmPass] = useState();

    const data = {
        name: name,
        last_name: last_name,
        email: email,
        password: password,
        confirm_pass: confirm_pass
    }



    const handleOnSubmit = () => {
        const fetchdata = async () => {
            const url = 'http://127.0.0.1:80/api/signup';
            const options = {
                method: 'post',
                body: JSON.stringify(data),
                headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    //'Access-Control-Allow-Headers': 'Authorization',
            },
                mode: 'cors',
            };

            fetch(url, options)
                .then(response => {
                    //debugger;
                    if(response.status === 201) {
                        alert(response.statusText);
                        return response.json();
                    }
                    return Promise.reject(response.status);
                }).then(data => {
                    //debugger;
                }).catch(error => {
                    setError(error);
                    alert("Tienes el siguiente error: " + error);
                });
        };
        fetchdata()
    }

    return (
        <Container component="main" maxWidth="xs" className={'contain'}>

            <div className={classes.paper}>


                <Typography component="h1" variant="h5" className={"titleSignUp"}>
                    Regístrate con <Link href="#" className={"LoginOut"}>Facebook</Link> o <Link href="#" className={"LoginOut"}>Google</Link>


                </Typography>
                <form method= "post" className={classes.form}>
                    <Grid container spacing={2}>
                        {/*        <Grid item xs={12} sm={5}>
                        <hr/>
                        </Grid>
                        o
                        <Grid item xs={12} sm={5}>
                        <hr/>
                        </Grid> */}
                        <Grid item xs={12} align={"center"} className={"o"}>
                            <hr></hr>
                            o
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                fullWidth
                                id="firstName"
                                label="Nombre"
                                value={name}
                                onChange={event => setName(event.target.value)}

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="lastName"
                                label="Apellido"
                                name="lastName"
                                autoComplete="lname"
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
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Establece una contraseña"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Confirma tu contraseña"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={confirm_pass}
                                onChange={event => setConfirmPass(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="No quiero recibir mensajes de promociones de Airbnb. También puedo optar por desactivarlos en la configuración de mi cuenta o a través del enlace del mensaje."
                                name="hasAgreed"
                                value={hasagreed}
                                onChange={event => setHasAgreed (event.target.value)}


                            />
                        </Grid>
                    </Grid>

                    <Grid container justify="flex-start">
                        <Grid item>
                            <span>¿Ya tienes una cuenta de Airbnb? </span>

                            <Link href="#" variant="body2" className={"link"}>
                                Inicia sesión
                            </Link>
                        </Grid>
                    </Grid>
                </form>
                //He cambiado la estructura y he colocado el submit fuera del form.
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
            </div>

        </Container>
    );
}