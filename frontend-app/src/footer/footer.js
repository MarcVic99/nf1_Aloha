import React from 'react';
import './FooterStyle.css';

import ColumnOne from "./footer_components/ColumnOne";
import ColumnTwo from "./footer_components/ColumnTwo";
import ColumnThree from "./footer_components/ColumnThree";
import ColumnFour from "./footer_components/ColumnsFour";

const FooterLinks = () => (

         <div id={'FooterLinksGeneral'}>

            <div id={'C1'}> <h4>Aloha</h4><ColumnOne/></div>
            <div id={'C2'}> <h4>Discover</h4><ColumnTwo/> </div>
             <div id={'C3'}><h4> Hospedar</h4> <ColumnThree/> </div>
            <div id={'C4'}> <h4> Redes</h4><ColumnFour/> </div>


         </div>


    );






export default FooterLinks;

