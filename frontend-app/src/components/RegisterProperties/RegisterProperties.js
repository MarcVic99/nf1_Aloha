import React from 'react';
import './RegisterProperties.css';
import HorizontalLabelPositionBelowStepper from "./Stepper";
import HeaderLogo from "../Header/HeaderLogo";
import Navbar from "../Header/Navbar";


export default function RegisterProperties() {

    return(
        <div>
            <Navbar class="header2"/>
            <div className="main_div">
                <div>
                    <div>

                    </div>
                    <nav>
                        <HorizontalLabelPositionBelowStepper/>
                    </nav>

                </div>
            </div>
        </div>

    );
};