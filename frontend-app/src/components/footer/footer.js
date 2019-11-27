import React from 'react';
import './FooterStyle.css';

import ColumnOne from "./footer_components/ColumnOne";
import ColumnTwo from "./footer_components/ColumnTwo";
import ColumnThree from "./footer_components/ColumnThree";
import ColumnFour from "./footer_components/ColumnsFour";
import CopyrightSpan from "./Copyright";
import red1 from "../../img/aloha/footer/facebook.png";
import red2 from "../../img/aloha/footer/twitter.png";
import red3 from "../../img/aloha/footer/instagram_icon.png";


const FooterLinks = () => (



    <div id="div_footer_general">


        <ul>
            <div className="div_footer">

                 <li>
                    <div className="div_footer_aloha">
                        <ul>
                            <li className="li_footer_title"><h4> Aloha </h4></li>

                            <ColumnOne/>
                        </ul>
                    </div>
                </li>

            </div>
            <div className="div_footer">

                <li>
                    <div className="div_footer2">
                        <ul>
                            <li><h4> Descubre Aloha </h4></li>

                            <ColumnTwo/>

                        </ul>
                    </div>
                </li>

            </div>
            <div className="div_footer">

                <li>
                    <div className="div_footer2">

                        <ul>
                            <li><h4> Hospedar </h4></li>

                            <ColumnThree/>
                        </ul>

                    </div>

                </li>

            </div>
            <div className="div_footer div_footer2">

                <li>
                    <div>

                        <ul>
                            <li className="li_footer_title">
                                <div id="redes">
                                    <a href="https://www.facebook.com"><img src={red1} width="20"
                                                                            height="20" className={'face'} alt={'facebook'}/></a>
                                    <a href="https://twitter.com"><img src={red2} width="20"
                                                                       height="20" alt={'twitter'}/></a>
                                    <a href="https://instagram.com"><img src={red3}
                                                                         width="20" height="20" className={'insta'} alt={'instagram'}/></a>
                                </div>
                            </li>
                            <div>

                                <ColumnFour/>

                            </div>
                        </ul>
                    </div>
                </li>
            </div>


            <hr></hr>

            <CopyrightSpan/>

        </ul>

    </div>


);

export default FooterLinks;

