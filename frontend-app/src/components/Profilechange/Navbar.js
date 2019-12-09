import React from "react";

import { withStyles } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "./Profilechange.css";
import logo from "./logo.jpg";
import Avatarsmall from "./Avatarsmall";


const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
          align={"left"}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

function Navbar() {
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
    <section>
      <div id="header2">
        <a href="/">
          <div className="father">
            <img
              src={logo}
              alt="Imagen ALOHA"
              margin-left="60px"
              width="75px;"
            />
          </div>
        </a>

        <nav id="menu">
          <ul>
            <div className="box">
              <a href="#">
                <li>Conviértete en anfitrion</li>
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
            <div className="box">
              <a href="#">
                <Avatarsmall />
              </a>
            </div>
             {/* <Select/> */}
          </ul>
        </nav>
      </div>
    </section>
  );
}
export default Navbar;
