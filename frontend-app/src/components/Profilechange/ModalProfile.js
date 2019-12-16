import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from "./Avatar";
import "./Profilemenu.css"
import Avatarsmall from "./Avatarsmall";
import "./ModalProfile.css"
import {AuthContext} from "../../App";
import Navbar from "./Navbar";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));

export default function MenuListComposition() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const {state, dispatch} = React.useContext(AuthContext);

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
        if (event.key === 'Tab') {
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
        <div className={classes.root}>
            <div>
                <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    <Avatarsmall/>
                </Button>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper id={'paper'}>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem onClick={handleClose}><a className="box_profile" href="/profile">Profile</a></MenuItem>
                                        <MenuItem onClick={handleClose}><a className="box_profile">Cuenta</a></MenuItem>
                                        <MenuItem onClick={handleClose}><a className="box_profile">Invita a tus amigos</a></MenuItem>
                                        <MenuItem onClick={handleClose}><a className="box_profile">Invita a infitriones</a></MenuItem>
                                        <MenuItem onClick={handleClose}><a className="box_profile">Tu guia</a></MenuItem>
                                        <MenuItem onClick={handleClose}><a className="box_profile">Rbnair For work</a></MenuItem>
                                        <MenuItem onClick={handleClose}><a className="box_profile">Espanole</a></MenuItem>
                                        <MenuItem onClick={handleClose}><a className="box_profile">Moneda</a></MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            {state.booleanAuth &&(<a className="box_profile">
                                                    <div onClick={()=> dispatch(
                                                        {type: "LOGOUT"}
                                                    )}>Cerrar sesion </div></a>)}
                                        </MenuItem>
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