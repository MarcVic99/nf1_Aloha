import React from 'react';
import './Aloha.css';

import ny from '../img/aloha/ny.jpg';
import tailandia from '../img/aloha/tailandia.jpg';
import kenia from '../img/aloha/kenia.jpeg';
import japon from '../img/aloha/japon.jpg';
import './signup/SignUp.css';
import FooterLinks from './footer/footer';
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