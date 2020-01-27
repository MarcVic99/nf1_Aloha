import './Profilechange.css';

import {AuthContext} from "../../App";
import CloseIcon from '@material-ui/icons/Close';
import HeaderLogo from "../Header/HeaderLogo";
import IconButton from '@material-ui/core/IconButton';
import ModalProfile from "./ModalProfile";
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

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


function Navbar() {

    



    return (

    <section>

            <div id="header">

                    <div className="father">
                        <HeaderLogo/>
                    </div>

                <nav id="menu">
                    <ul>
                        <div className="box">
                            <a href="/RegisterProperties">
                                <li>Conviértete en anfitrión</li>
                            </a>
                        </div>
                        <div className="box">
                            <a href="#">
                                <li>Guardados</li>
                            </a>
                        </div>
                        <div className="box">
                            <a href="#">
                                <li>Viajes</li>
                            </a>
                        </div>
                        <div className="box">
                            <a href="#">
                                <li>Mensajes</li>
                            </a>
                        </div>
                        <div className="box">
                            <a href="#">
                                <li>Ayuda</li>
                            </a>
                        </div>
                    </ul>
                </nav>
                <div className="father">
                    <li><ModalProfile/></li>
                </div>
            </div>
        </section >

    );

}
export default Navbar
