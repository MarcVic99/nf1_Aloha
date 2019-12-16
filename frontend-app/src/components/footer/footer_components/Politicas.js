import React from "react";
import HeaderLogo from "../../Header/HeaderLogo";
import FooterLinks from "../footer";



const Politicas = () =>{

    return(
        <div className="components_footer">
            <HeaderLogo/>
            <h2>Condiciones y políticas</h2>

            <p>Estos términos, políticas y normas se aplican al acceso y uso de la plataforma de Airbnb, además de los Términos de Servicio y los Términos de Pago del Servicio.
            </p>

            <footer>
                <FooterLinks />
            </footer>
        </div>

    );

}

export default Politicas;