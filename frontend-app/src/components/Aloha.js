import React from 'react';
import './Aloha.css';

import logo from '../img/aloha/logo_aloha.png';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import './signup/SignUp.css';
import SignUp from './signup/SignUp';
import LogIn from './login/LogIn';
import FooterLinks from './footer/footer';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

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
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose} align={"left"}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});


export default function Modal() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        setOpen2(false);
    };
    const handleClose = () => {
        setOpen(false);
    };


    const [open2, setOpen2] = React.useState(false);

    const handleClickOpen2 = () => {
        setOpen2(true);
        setOpen(false);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };

    return (
        <div>

            <section className="section_head">
                <Router>
                    <div id="header">
                        <Link to="/">
                            <div className="father">
                                <img src={logo} alt="Imagen ALOHA" width="40px;"/>
                            </div>
                        </Link>


                        <nav id="menu">
                            <ul>
                                <div className="box">
                                    <Link href="#">
                                        <li>Hospeda un alojamiento</li>
                                    </Link>
                                </div>
                                <div className="box">
                                    <Link href="#">
                                        <li>Ofrece una experiencia</li>
                                    </Link>
                                </div>
                                <div className="box">
                                    <Link to="/profilemenu">
                                        <li>Ayuda</li>
                                    </Link>
                                </div>

                                <div className="box">
                                    <Link onClick={handleClickOpen} className="open">
                                        <li>Regístrate</li>
                                    </Link>

                                    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}
                                            className={"modalblack"}>
                                        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                                            <br></br>
                                        </DialogTitle>

                                        <SignUp handleOpenLogin={handleClickOpen2}/>

                                    </Dialog>

                                </div>
                                <div className="box">

                                    <Link onClick={handleClickOpen2} className="open">
                                        <li>Inicia Sesión</li>
                                    </Link>

                                    <Dialog onClose={handleClose2} aria-labelledby="customized-dialog-title"
                                            open={open2} className={"modalblack"}>
                                        <DialogTitle id="customized-dialog-title" onClose={handleClose2}>
                                            <br></br>
                                        </DialogTitle>

                                        <LogIn handleOpenSignUp={handleClickOpen}/>

                                    </Dialog>
                                </div>
                            </ul>
                        </nav>

                    </div>


                    <div className="container_form">
                        <div className="container_form2">
                            <div id="form_ini">
                                <h1>Reserva alojamientos y experiencias únicas.</h1>
                                <form action="/action_page.php">
                                    <div className="description_input"><b>DÓNDE</b>
                                    </div>
                                    <div className="div_donde">
                                        <input type="text" name="location" placeholder="Dónde"
                                               className={'inputlocation'}/>
                                    </div>

                                    <div className="llegada_salida">
                                        <div className="description_input"><b>LLEGADA</b>
                                        </div>
                                        <div className={'divinputlocation2'}>
                                            <input className="locat1" type="text" name="location"
                                                   placeholder="dd/mm/aaaa"/>
                                        </div>
                                    </div>

                                    <div className="llegada_salida">
                                        <div className="description_input"><b>SALIDA</b>
                                        </div>
                                        <div className="divfecha1">
                                            <input className="locat2" type="text" name="location"
                                                   placeholder="dd/mm/aaaa"/>
                                        </div>
                                    </div>

                                    <div className="description_input"><b>HUÉPEDES</b>
                                    </div>
                                    <div className="input_huespedes">
                                        <input type="text" name="location" placeholder="Huéspedes"
                                               className="inputhuespedes"/>
                                    </div>


                                    <div className="div_find">
                                        <button id="find" type="submit">
                                            <span><b>Buscar</b></span>
                                        </button>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>

                </Router>


            </section>

            <section>

                <div id="div_recomended_general">

                    <div className="ny dist_img">
                        <div className="div_bottom">asdf</div>
                    </div>
                    <div className="tailandia dist_img">2</div>
                    <div className="japon dist_img">3</div>
                    <div className="kenia dist_img">4</div>

                </div>

            </section>
            <footer>

                <FooterLinks/>

            </footer>

        </div>

    );

}