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
import {Link }from 'react-router-dom';

import './signup/SignUp.css';
import SignUp from './signup/SignUp';
import LogIn from './login/LogIn';
import FooterLinks from './footer/footer';
import Profile from './Profilechange/Profile';
import Header from "./Header/Header";

export default function Modal() {
    return (
        <div>
        <Header/>

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