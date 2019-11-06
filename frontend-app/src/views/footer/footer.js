import React from 'react';
import './FooterStyle.css';


import ColumnOne from "./footer_components/ColumnOne";
import ColumnTwo from "./footer_components/ColumnTwo";
import ColumnThree from "./footer_components/ColumnThree";
import ColumnFour from "./footer_components/ColumnsFour";
import CopyrightSpan from "./footer_components/Copyright";
import { withRouter } from "react-router";




const FooterLinks = () => (
    <div id={'footerGeneralDiv'}>
        <hr>
        </hr>
         <div id={'FooterLinksGeneral'}>

             <div id={'C1'}><h4>Aloha</h4><ColumnOne/></div>
              <div id={'C2'}><h4>Discover</h4><ColumnTwo/></div>
              <div id={'C3'}><h4> Hospedar</h4> <ColumnThree/></div>
              <div id={'C4'}><ColumnFour/></div>



         </div>
    <hr>
    </hr>
    <div id={'pruebadiv'}>

        <CopyrightSpan/>

    </div>

    </div>

);







export default FooterLinks;

