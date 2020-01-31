import React from 'react';
import './RegisterProperties.css';
import HorizontalLabelPositionBelowStepper from "./Stepper";
import HeaderLogo from "../Header/HeaderLogo";


export default function RegisterProperties() {

    return(
        <div className="main_div">
            <div>
                <div>
                    <HeaderLogo/>
                </div>
              <nav>
                  <HorizontalLabelPositionBelowStepper/>
                </nav>

            </div>
        </div>

    );
};