import React from 'react';

import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
//import '../Profilechange/Profilechange.css';
import "../Aloha.css"

import HeaderLogo from "../Header/HeaderLogo";
import ModalProfile from "../Profilechange/ModalProfile";
import {AuthContext} from "../../App";
import logo from "../../img/aloha/logo_aloha.png";
import Dialog from "@material-ui/core/Dialog";
import SignUp from "../signup/SignUp";
import LogIn from "../login/LogIn";
import {APP_ROOT} from "../../routes/routes";

function Navbar(props) {

    const {state} = React.useContext(AuthContext);

    const [openSignUp, setopenSignUp] = React.useState(false);
    const [openLogIn, setopenLogIn] = React.useState(false);

    const handleClickOpenSignUp = () => {
        setopenSignUp(true);
        setopenLogIn(false);
    };

    const handleClickOpenLogIn = () => {
        setopenLogIn(true);
        setopenSignUp(false);
    };

    const handleCloseSignUp = () => {
        setopenSignUp(false);
    };
    const handleCloseLogIn = () => {
        setopenLogIn(false);
    };


    return (

        <div className={props.class}>

            <div className="father">
                <a href={APP_ROOT}> <img src={logo} alt="Imagen_Aloha" width="40px"/> </a>
            </div>

            {state.booleanAuth &&(

                            <div>

                                <nav id="menu">
                                    <ul>
                                        <div className="box">
                                            <a href="/RegisterProperties">
                                                <li className="limenu">Conviértete en anfitrión</li>
                                            </a>
                                        </div>
                                        <div className="box">
                                            <a href="#">
                                                <li className="limenu">Guardados</li>
                                            </a>
                                        </div>
                                        <div className="box">
                                            <a href="#">
                                                <li className="limenu">Viajes</li>
                                            </a>
                                        </div>
                                        <div className="box">
                                            <a href="#">
                                                <li className="limenu">Mensajes</li>
                                            </a>
                                        </div>
                                        <div className="box">
                                            <a href="#">
                                                <li className="limenu">Ayuda</li>
                                            </a>
                                        </div>

                                        <div>
                                            <li className="limenu"><ModalProfile/></li>
                                        </div>
                                    </ul>
                                </nav>
                            </div>

            )}
            {!state.booleanAuth && (



                    <div>
                        {/*  <a href="https://www.airbnb.es">
                            <div className="father">
                                <img src={logo} alt="Imagen ALOHA" width="40px;"/>
                            </div>
                        </a> */}

                        <nav id="menu">
                            <ul>

                                <div className="box">
                                    <a href="#">
                                        <li className="limenu">Hospeda un alojamiento</li>
                                    </a>
                                </div>
                                <div className="box">
                                    <a href="#">
                                        <li className="limenu">Ofrece una experiencia</li>
                                    </a>
                                </div>
                                <div>
                                    <div className="box">
                                        <a onClick={handleClickOpenSignUp} className="open">
                                            <li className="limenu">Regístrate</li>
                                        </a>
                                        <Dialog onClose={handleCloseSignUp} open={openSignUp}
                                                className={"modalblack"}>

                                            <MuiDialogTitle disableTypography>
                                                <IconButton onClick={handleCloseSignUp}>
                                                    <CloseIcon/>
                                                </IconButton>
                                            </MuiDialogTitle>

                                            <SignUp handleOpenLogIn={handleClickOpenLogIn}/>

                                        </Dialog>
                                    </div>
                                    <div className="box">
                                        <a onClick={handleClickOpenLogIn} className="open">
                                            <li className="limenu">Inicia Sesión</li>
                                        </a>

                                        <Dialog onClose={handleCloseLogIn} open={openLogIn} className={"modalblack"}>

                                            <MuiDialogTitle disableTypography>
                                                <IconButton onClick={handleCloseLogIn}>
                                                    <CloseIcon />
                                                </IconButton>
                                            </MuiDialogTitle>

                                            <LogIn handleOpenSignUp={handleClickOpenSignUp}/>
                                        </Dialog>
                                    </div>
                                </div>
                            </ul>
                        </nav>
                    </div>

            )}
        </div>

    );

}
export default Navbar;