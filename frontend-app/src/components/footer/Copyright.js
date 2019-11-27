import React from 'react';
import logo from "../../img/aloha/footer/pineaple.png";

const CopyrightSpan = () =>(

    <div id={'copyrightSpan'} className={"copyright"}>

        <span className={"span_copyright"}><img src={logo} height={30} width={30} alt={"copyright"}/> © 2019 Aloha, Inc. All rights reserved.</span>

    </div>

);

export default CopyrightSpan;