import React from 'react';
import Avatar from "./Avatar";
import './Profilechange.css';
import { Link } from "react-router-dom";

function Profilephoto() {
    return (

        <div className="photocellout">
            <div className="photocellin">
                <div><Avatar /></div>

                <div className="editprofile">
                    <Link to="/user/edit-photo">Actualizar foto</Link>
                </div>

                <hr />
                <div>
                    <p>Numero de telefono</p>
                </div>
            </div>
        </div>
    )
}


export default Profilephoto