import React from "react";
import Navbar from "../../Header/Navbar";
import "../FooterStyle.css";
import acces from "../../../img/aloha/footer/acces.jpg";

const Accesibilidad = () =>{

    return(
        <div className="components_footer">
            <Navbar class="header2" />
            <div className="padre">
                <h1 className="hijo">Aloha es para todos</h1>
            </div>
            <div className="padre">
                <p className="contenido"> Así es como estamos construyendo un Aloha más accesible </p>
            </div>

            <div id="logo-container">
                <img src={acces} alt="Logo" />
            </div>
        </div>
    );

}

export default Accesibilidad;