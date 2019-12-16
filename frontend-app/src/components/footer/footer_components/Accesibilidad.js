import React from "react";
import HeaderLogo from "../../Header/HeaderLogo";
import FooterLinks from "../footer";



const Accesibilidad = () =>{

    return(
        <div className="components_footer">
            <HeaderLogo/>
            <h2>Airbnb es para todos</h2>

            <p>Así es como estamos construyendo un Airbnb más accesible
            </p>
            <footer>
                <FooterLinks />
            </footer>
        </div>
    );

}

export default Accesibilidad;