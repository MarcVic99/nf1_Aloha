import React from 'react';
import './Aloha.css';

import logo from '../img/aloha/logo_aloha.png';
import ny from '../img/aloha/ny.jpg';
import tailandia from '../img/aloha/tailandia.jpg';
import kenia from '../img/aloha/kenia.jpeg';
import japon from '../img/aloha/japon.jpg';

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
        <div>
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

                <img src={ny} height="380" width="320" className="dist_img" alt={"ny"}/>
                <img src={tailandia} height="380" width="320" className="dist_img" alt={"tailandia"}/>
                <img src={japon} height="380" width="320" className="dist_img" alt={"japon"}/>
                <img src={kenia} height="380" width="320" className="dist_img" alt={"kenia"}/>

            </div>

        </section>

        <footer>

            <FooterLinks/>

        </footer>

        </div>

    );

}