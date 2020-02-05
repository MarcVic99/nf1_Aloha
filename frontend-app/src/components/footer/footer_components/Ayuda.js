import React from "react";
import HeaderLogo from "../../Header/HeaderLogo";
import FooterLinks from "../footer";



const Ayuda = () =>{

    return(

        <div className="components_footer">
            <HeaderLogo/>
            <h2>AInicia sesión para obtener ayuda con tus reservas y mucho más</h2>

            <p>Artículos más leídos
            </p>

            <footer>
                <FooterLinks />
            </footer>
        </div>

    );

}

export default Ayuda;