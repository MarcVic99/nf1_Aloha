import "./ModalProfile.css";

import { APP_ACCOUNT, APP_PROFILE, APP_ROOT, APP_PROPERTY } from "../../routes/routes";

import { AuthContext } from "../../App";
import Avatarsmall from "./Avatarsmall";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import React from "react";

export default function MenuListComposition() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const { state, dispatch } = React.useContext(AuthContext);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <div className="modalprofile">
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Avatarsmall />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper id={"paper"}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="menu-list-grow" className="modal1">
                    <a href={APP_PROFILE}>
                      <MenuItem className="MenuItem" onClick={handleClose}>
                        <span className="box_profile">Perfil</span>
                      </MenuItem>
                    </a>
                    <a href={APP_PROPERTY}>
                      <MenuItem className="MenuItem" onClick={handleClose}>
                        <span className="box_profile">Mis propiedades</span>
                      </MenuItem>
                    </a>
                    <a href={APP_ACCOUNT}>
                      <MenuItem className="MenuItem" onClick={handleClose}>
                        <span className="box_profile">Cuenta</span>
                      </MenuItem>
                    </a>
                    <a href="">
                      <MenuItem className="MenuItem" onClick={handleClose}>
                        <span className="box_profile">Invita a tus amigos</span>
                      </MenuItem>
                    </a>
                    <a href="">
                      <MenuItem className="MenuItem" onClick={handleClose}>
                        <span className="box_profile">
                          Invita a anfitriones
                        </span>
                      </MenuItem>
                    </a>
                    <a href="">
                      <MenuItem className="MenuItem" onClick={handleClose}>
                        <span className="box_profile">Tu guia</span>
                      </MenuItem>
                    </a>
                    <a href="">
                      <MenuItem className="MenuItem" onClick={handleClose}>
                        <span className="box_profile">Aloha For work</span>
                      </MenuItem>
                    </a>
                    <a href="">
                      <MenuItem className="MenuItem" onClick={handleClose}>
                        <span className="box_profile">Español</span>
                      </MenuItem>
                    </a>
                    <a href="">
                      <MenuItem className="MenuItem" onClick={handleClose}>
                        <span className="box_profile">Moneda</span>
                      </MenuItem>
                    </a>
                    <a href={APP_ROOT}>
                      <MenuItem className="MenuItem" onClick={handleClose}>
                        {state.booleanAuth && (
                          <span onClick={() => dispatch({ type: "LOGOUT" })}>
                            Cerrar sesion
                          </span>
                        )}
                      </MenuItem>
                    </a>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}