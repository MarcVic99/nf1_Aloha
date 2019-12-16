import React from "react";
import HeaderLogo from "../../Header/HeaderLogo";
import FooterLinks from "../footer";



const Noticias = () =>{

    return(
        <div className="components_footer">
            <HeaderLogo/>
            <h2>Últimas noticias</h2>

            <p>Mejores soluciones para un turismo sostenible y de calidad en el País Vasco
                Airbnb ha contribuido al crecimiento económico en las zonas rurales. El País Vasco debe apoyar un modelo de turismo sostenible que proteja los ingresos de las familias en esas zonas.
                5 de diciembre de 2019 · España
            </p>

            <footer>
                <FooterLinks />
            </footer>
        </div>

    );

}

export default Noticias;