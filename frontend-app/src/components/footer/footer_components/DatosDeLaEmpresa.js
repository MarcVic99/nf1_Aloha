import React from "react";
import HeaderLogo from "../../Header/HeaderLogo";
import FooterLinks from "../footer";



const DatosDeLaEmpresa = () =>{

    return(
        <div className="components_footer">
            <HeaderLogo/>
            <h2>Datos de la empresa</h2>

            <p>Proveedor del sitio web:
                Airbnb Ireland UC, private unlimited company
                The Watermarque Building, South Lotts Road
                Ringsend, Dublín 4
                Irlanda
            </p>

            <footer>
                <FooterLinks />
            </footer>
        </div>

    );

}

export default DatosDeLaEmpresa;