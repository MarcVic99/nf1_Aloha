import React from 'react';
import logo from "./img/pineaple.png";

const CopyrightSpan = () =>(
    <div id={'copyrigthSpan'}>

        <span><img src={logo} height={30}   width={30}></img> © 2019 Airbnb, Inc. All rights reserved.</span>

    </div>
);

export default CopyrightSpan;