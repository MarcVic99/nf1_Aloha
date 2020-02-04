import "./RegisterProperties.css";

import HorizontalLabelPositionBelowStepper from "./Stepper";
import Navbar from "../Header/Navbar";
import React from "react";

export default function RegisterProperties() {
  return (
    <div>
      <Navbar class="header2" />
      <div className="main_div">
        <div>
          <nav>
            <HorizontalLabelPositionBelowStepper />
          </nav>
        </div>
      </div>
    </div>
  );
}

