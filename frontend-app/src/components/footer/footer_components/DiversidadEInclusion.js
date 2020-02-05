import React from "react";
import HeaderLogo from "../../Header/HeaderLogo";
import FooterLinks from "../footer";



const DiversidadEInclusion = () =>{

    return(
        <div className="components_footer">
            <HeaderLogo/>
            <h2>Airbnb es posible gracias a una comunidad internacional y diversa</h2>

            <p>Creemos en la bondad innata de la gente y en que todas las personas pueden sentirse como en casa en cualquier comunidad del mundo. Sinceramente,
                creo que la discriminación es el mayor reto al que nos enfrentamos como empresa. Se opone frontalmente a nuestra idea de comunidad y el hecho de
                que pueda existir en nuestra plataforma amenaza los principios que defendemos.
            </p>

            <footer>
                <FooterLinks />
            </footer>
        </div>

    );

}

export default DiversidadEInclusion ;