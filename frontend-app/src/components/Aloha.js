import React from 'react';
import './Aloha.css';
import logo from '../img/aloha/logo_aloha.png';
import ny from '../img/aloha/ny.jpg';
import red1 from '../img/aloha/facebook.png';
import red2 from '../img/aloha/twitter.png';
import red3 from '../img/aloha/instagram_icon2.png';
import copy from '../img/aloha/pineaple.png';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import './signup/SignUp.css';
import SignUp from './signup/SignUp';
import LogIn2 from './login/LogIn2';
import LogIn from '../views/LogIn/LogIn';
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
    };
    const handleClose = () => {
        setOpen(false);
    };



    const [open2, setOpen2] = React.useState(false);

    const handleClickOpen2 = () => {
        setOpen2(true);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };



    return (
        <body>
        <section className="section_head">
            <div id="header">
                <a href="https://www.airbnb.es">
                    <div className="father">
                        <img src={logo} alt="Imagen ALOHA" width="40px;"/>
                    </div>
                </a>

                <nav id="menu">
                    <ul>
                        <div className="box">
                            <a href="#">
                                <li>Hospeda un alojamiento</li>
                            </a>
                        </div>
                        <div className="box">
                            <a href="#">
                                <li>Ofrece una experiencia</li>
                            </a>
                        </div>
                        <div className="box">
                            <a href="#">
                                <li>Ayuda</li>
                            </a>
                        </div>
                        <div className="box">

                            <a onClick={handleClickOpen} className="open">
                                <li>Regístrate</li>
                            </a>

                            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} className={"modalblack"}>
                                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                                    <br></br>
                                </DialogTitle>

                                <SignUp/>

                            </Dialog>

                        </div>
                        <div className="box">

                            <a onClick={handleClickOpen2} className="open">
                                <li>Inicia Sesión</li>
                            </a>

                            <Dialog onClose={handleClose2} aria-labelledby="customized-dialog-title" open={open2} className={"modalblack"}>
                                <DialogTitle id="customized-dialog-title" onClose={handleClose2}>
                                    <br></br>
                                </DialogTitle>

                                <LogIn/>

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
                                <input type="text" name="location" placeholder="Dónde" className={'inputlocation'}/>
                            </div>

                            <div className="llegada_salida">
                                <div className="description_input"><b>LLEGADA</b>
                                </div>
                                <div className={'divinputlocation2'}>
                                    <input className="locat1" type="text" name="location" placeholder="dd/mm/aaaa"/>
                                </div>
                            </div>

                            <div className="llegada_salida">
                                <div className="description_input"><b>SALIDA</b>
                                </div>
                                <div className="divfecha1">
                                    <input className="locat2" type="text" name="location" placeholder="dd/mm/aaaa"/>
                                </div>
                            </div>

                            <div className="description_input"><b>HUÉPEDES</b>
                            </div>
                            <div className="input_huespedes">
                                <input type="text" name="location" placeholder="Huéspedes" className="inputhuespedes"/>
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


        </section>


        <section>



            <div id="div_recomended_general">



                <img src={ny} height="380" width="320" className="dist_img"/>
                <img src={ny} height="380" width="320" className="dist_img"/>
                <img src={ny} height="380" width="320" className="dist_img"/>
                <img src={ny} height="380" width="320" className="dist_img"/>
                <img src={ny} height="380" width="320" className="dist_img"/>

            </div>

        </section>

        <footer>

            <div id="div_footer_general">
                <ul>
                    <div className="div_footer">

                        <li>
                            <div className="div_footer_aloha">
                                <ul>
                                    <li className="li_footer_title"><h4> Aloha </h4></li>

                                    <li><a href="https://www.google.com"> Empleo </a></li>
                                    <li><a href="">Noticias </a></li>
                                    <li><a href="">Políticas </a></li>
                                    <li><a href="">Ayuda </a></li>
                                    <li><a href="">Diversidad e inclusión </a></li>
                                    <li><a href="">Accesibilidad </a> <span className="span_new">Nuevo</span></li>
                                    <li><a href="">Datos de la empresa </a></li>
                                </ul>
                            </div>
                        </li>

                    </div>
                    <div className="div_footer">

                        <li>
                            <div className="div_footer2">
                                <ul>
                                    <li><h4> Descubre Aloha </h4></li>

                                    <li><a href="https://www.google.com"> Confianza y seguridad </a></li>
                                    <li><a href="">Crédito para viajar </a></li>
                                    <li><a href="">Airbnb Citizen </a></li>
                                    <li><a href="">Viajes de negocios </a></li>
                                    <li><a href="">Actividades </a> <span className="span_new">Nuevo</span></li>
                                    <li><a href="">Airbnbmag </a></li>

                                </ul>
                            </div>
                        </li>

                    </div>
                    <div className="div_footer">

                        <li>
                            <div className="div_footer2">

                                <ul>
                                    <li><h4> Hospedar </h4></li>

                                    <li><a href="https://www.google.com"> Razones para hospedar </a></li>
                                    <li><a href=""> Hospitalidad </a></li>
                                    <li><a href="">Ser un anfitrión responsable </a></li>
                                    <li><a href="">Centro de la comunidad</a></li>
                                    <li><a href="">Ofrece una experiencia </a> <span className="span_new">Nuevo </span>
                                    </li>
                                    <li><a href="">Open Homes </a></li>
                                </ul>

                            </div>

                        </li>

                    </div>
                    <div className="div_footer div_footer2">

                        <li>
                            <div>

                                <ul>
                                    <li className="li_footer_title">
                                        <div id="redes">
                                            <a href="https://www.facebook.com"><img src={red1} width="20"
                                                                                    height="20" className={'face'}/></a>
                                            <a href="https://twitter.com"><img src={red2} width="20"
                                                                               height="20"/></a>
                                            <a href="https://instagram.com"><img src={red3}
                                                                                 width="20" height="20" className={'insta'}/></a>
                                        </div>
                                    </li>
                                    <div>

                                        <li><a>Condiciones</a></li>
                                        <li><a>Privacidad </a></li>
                                        <li><a>Mapa del sitio</a></li>

                                    </div>
                                </ul>
                            </div>
                        </li>
                    </div>


                    <hr></hr>
                    <div className="copyright">
                        <img src={copy} height="25"/> <span className="span_copyrigth"><bold>© 2019 Aloha, Inc. All rights reserved.</bold></span>
                    </div>

                </ul>

            </div>


        </footer>

        </body>

    );

}