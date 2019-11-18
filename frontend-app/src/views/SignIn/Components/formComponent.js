import React from 'react';

const formInput= [{
    "name": "Input1",
    "alt": " Insert your email here ",
    "formMethod":"GET",
    "height":"",
    "width": "",
    "placeholder":" Write your Email",
    "type":"Text"

    },
    {
        "name" : "Input2",
        "alt": " Insert your password here ",
        "formMethod":"GET",
        "height":"",
        "width": "",
        "placeholder" :" Password",
        "type":"Text"

    },];

const FormGeneral = () => (
    <div id={'generalInput'}>

    <form>
        {formInput.map(item => (
            <div id={'individualInput'}>

                <input formMethod={item.formMethod} alt={item.alt} placeholder={item.placeholder} type={item.type} width={item.width} height={item.height}>

                </input>
            </div>
            ))}

    </form>

    </div>



);



export default FormGeneral;