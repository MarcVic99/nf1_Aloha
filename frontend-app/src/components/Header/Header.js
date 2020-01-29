import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../Aloha.css"
import Calendario from "../Calendario";
import PropertiesList from "../Properties/PropertiesList";
import ModalProfile from "../Profilechange/ModalProfile";

const Header = () => {

return (
    <div className="section_head">

                <Navbar class="header1"/>

            <div className="container_form">
                <div className="container_form2">
                    <div id="form_ini">
                        <h1>Reserva alojamientos y experiencias únicas.</h1>
                        <form action="/action_page.php">
                            <div className="description_input"><b>DÓNDE</b>

                            </div>
                            <div className="div_donde" placeholder="Dónde">
                                <input type="text" name="location" placeholder="Dónde" className={'inputlocation'}/>
                            </div>

                            <div className="llegada_salida">
                                <div className="description_input"><b>LLEGADA</b>
                                    <Calendario/>
                                </div>
                                {/*<div className={'divinputlocation2'}>*/}
                                {/*    <input className="locat1" type="text" name="location" placeholder="dd/mm/aaaa"/>*/}
                                {/*</div>*/}
                            </div>
                            {/*placeholder="MM/dd/yyyy"*/}
                            <div className="llegada_salida">
                                <div className="description_input"><b>SALIDA</b>
                                    <Calendario/>

                                </div>
                                {/*<div className="divfecha1">*/}
                                {/*    <input className="locat2" type="text" name="location" placeholder="dd/mm/aaaa"/>*/}
                                {/*</div>*/}
                            </div>

                            <div className="description_input"><b>HUÉPEDES</b>
                            </div>
                            <div className="input_huespedes">
                                <input type="text" name="location" placeholder="Huéspedes" className="inputhuespedes"/>
                            </div>


                            <div className="div_find">
                                <button id="find" type="submit">
                                    <span><b>Buscar</b></span>
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
</div>


    );
};

export default Header;