import React, { useState, useEffect } from "react";
import logo from "../../img/aloha/logo_aloha.png";
import Dialog from "@material-ui/core/Dialog";
import SignUp from "../signup/SignUp";
import LogIn from "../login/LogIn";
import {AuthContext} from "../../App";
import {withStyles} from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Navbar from "../Profilechange/Navbar";
import "../Aloha.css"
import Search from "../Properties/Search";




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

const Header = () => {

    const {state} = React.useContext(AuthContext);

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

            {state.booleanAuth &&(
                <div className="box">
                    <li><Navbar/></li>

                </div>
            )}
            {!state.booleanAuth && (
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
                            <a href="/RegisterProperties">
                                <li>Conviértete en anfitrión</li>
                            </a>
                        </div>
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
                            <div>
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
                                        <LogIn />

                                    </Dialog>
                                </div>
                            </div>
                    </ul>
                </nav>
            </div>

            <div className="container_form">
                <div className="container_form2">
                    <Search />
                </div>
            </div>

        </section>
    )}
    </div>
    )
};

export default Header;