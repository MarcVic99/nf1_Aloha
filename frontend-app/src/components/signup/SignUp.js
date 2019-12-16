import React, { useState,useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './SignUp.css';
import LogIn from '../login/LogIn';
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/core/SvgIcon/SvgIcon";
import clsx from "clsx";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

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

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

export default function SignUp( props) {

    const { handleOpenLogin } = props;
    const classes = useStyles();


    const [name, setName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_pass, setConfirmPass] = useState();
    const [hasagreed, setHasAgreed] = useState('');
    const [error, setError] = useState('');


    const data = {
        name: name,
        last_name: last_name,
        email: email,
        password: password,
        confirm_pass: confirm_pass
    }

    const [values, setValues] = React.useState({
        showPassword: false,
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };



    const [values2, setValues2] = React.useState({
        showPassword2: false,
    });

    const handleChange2 = prop => event => {
        setValues2({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword2 = () => {
        setValues2({ ...values2, showPassword2: !values2.showPassword2 });
    };

    const handleMouseDownPassword2 = event => {
        event.preventDefault();
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
                            setError(resp.errors);
                        }))
                    } else if (response.status === 200) {
                        response.json().then((resp => {
                            //console.warn("resp",resp);
                            setError('');
                        }))

                    }
                }).catch(error => {
                setError(error);

            });

        };

        fetchdata()
    }

    return (
        <Container component="main" maxWidth="xs" className={'contain'}>
            <div>

                <form className={classes.form}>
                    <Grid container spacing={2}>

                        <Grid item xs={12} align={"center"} className={"o"}>
                            <hr/>
                            o
                        </Grid>

                        <Typography component="h1" variant="h5" className={"titleSignUp"}>
                            Regístrate con <Link href="#" className={"LoginOut"}>Facebook</Link> o <Link href="#" className={"LoginOut"}>Google</Link>
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
                                className={clsx(classes.margin, classes.textField)}
                                type={values.showPassword ? 'text' : 'password'}
                                value={password}
                                autoComplete="current-password"
                                onChange={event => setPassword(event.target.value)}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            size={"small"}
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
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
                                className={clsx(classes.margin, classes.textField)}
                                type={values2.showPassword2 ? 'text' : 'password'}
                                value={confirm_pass}
                                autoComplete="current-password"
                                onChange={event => setConfirmPass(event.target.value)}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword2}
                                            onMouseDown={handleMouseDownPassword2}
                                            size={"small"}
                                        >
                                            {values2.showPassword2 ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12} >
                            <p className={"error"}> {error} </p>

                            {/*  {error ? <p className={"error"}> {error} </p>: <p> Bienvenido {name} </p>}*/}
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

                        <Link onClick={handleOpenLogin} className="open">
                            Inicia sesión
                        </Link>
                    </Grid>
                </Grid>
            </div>

        </Container>
    );
}