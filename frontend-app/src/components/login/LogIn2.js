import React, {useState, useEffect} from 'react';
import '../signup/SignUp.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


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


export default function LogIn2() {

    const classes = useStyles();

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
            const url = "http://127.0.0.1:80/login";
            const options = {
                method: 'post',
                body: JSON.stringify(data),
                header: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    // 'Acces-Control-Allow-Headers': 'Authorization',
                },
                mode: 'cors'
            }


            return fetch(url, options)

                .then(response => {
                    if (response.status == 200) {
                        console.log(response);}
                    return Promise.reject(response.status);
                }).catch(error => {
                    setError(error);
                    alert(error);// Este catch nos ejecuta algo cuándo no hay respuesta

                });

        };
       //event.preventDefault();
        fetchdata();
        //return false;
    }

    return (
        <Container component="main" maxWidth="xs" className={'contain'}>

            <div className={classes.paper}>

                <form method="post" className={classes.form} >
                    <Grid container spacing={2}>

                        <hr/>

                        <Grid item xs={12} align={"center"} className={"o"}>
                            Inicia Sesión
                            <hr></hr>

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
                                type="email"
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
                                label="Contraseña"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                label="Recordarme"
                                name="Remember"
                                value={remember}
                                onChange={event => setRemember(event.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        text-transform="none"
                        color="secondary"
                        size="medium"
                        className={'boton'}
                        onClick={handleSubmit}

                    >
                        Inicia Sesión
                    </Button>


                </form>

            </div>

        </Container>
    );
}