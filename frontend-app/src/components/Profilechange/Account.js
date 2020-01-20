import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Navbar from "./Navbar";
import {AuthContext} from "../../App";

const useStyles = makeStyles({
    card: {
        maxWidth: 400,
        minHeight:250,
        flexDirection: 'column',
        display: 'inline-block',

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    header: {
        marginTop: 30,
        marginBottom: 50,
    },
    mothercard: {

        marginLeft: 300,
        marginRight: 200,

    },
});

export default function SimpleCard() {
    const {state} = React.useContext(AuthContext);
    const [name, setName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    useEffect(() => {
        if(state.user){
            setName(state.user.name);
            setLastName(state.user.last_name);
            setEmail(state.user.email);
        }
    });

    return (
        <div>
          <Navbar/>
        <div className={classes.mothercard}>
            <div className={classes.header}>
                <h1>Cuenta</h1>
                <h5>{name} {last_name}, {email} · <a href="/profile">Ir al perfil</a></h5>
            </div>
            <Card className={classes.card}>
                <CardActions>
                    <Button size="small">Informacion personal</Button>
                    <p>Proporciona tus datos personales e indícanos cómo podemos ponernos en contacto contigo</p>
                </CardActions>

            </Card>

            <Card className={classes.card}>
                <CardActions>
                    <Button size="small">Inicio de sesión y seguridad</Button>
                    <p>Actualiza tu contraseña y protege tu cuenta</p>
                </CardActions>

            </Card>
            <Card className={classes.card}>
                <CardActions>
                    <Button size="small">Inicio de sesión y seguridad</Button>
                    <p>Actualiza tu contraseña y protege tu cuenta</p>
                </CardActions>

            </Card>
            <Card className={classes.card}>
                <CardActions>
                    <Button size="small">Inicio de sesión y seguridad</Button>
                    <p>Actualiza tu contraseña y protege tu cuenta</p>
                </CardActions>

            </Card>
            <Card className={classes.card}>
                <CardActions>
                    <Button size="small">Inicio de sesión y seguridad</Button>
                    <p>Actualiza tu contraseña y protege tu cuenta</p>
                </CardActions>

            </Card>
            <Card className={classes.card}>
                <CardActions>
                    <Button size="small">Inicio de sesión y seguridad</Button>
                    <p>Actualiza tu contraseña y protege tu cuenta</p>
                </CardActions>

            </Card>
            <Card className={classes.card}>
                <CardActions>
                    <Button size="small">Inicio de sesión y seguridad</Button>
                    <p>Actualiza tu contraseña y protege tu cuenta</p>
                </CardActions>

            </Card>
            <Card className={classes.card}>
                <CardActions>
                    <Button size="small">Inicio de sesión y seguridad</Button>
                    <p>Actualiza tu contraseña y protege tu cuenta</p>
                </CardActions>

            </Card>
        </div>

        </div>


    );
}
