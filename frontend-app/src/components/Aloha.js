import React from 'react';
import './Aloha.css';
import Header from "./Header/Header";

export default function Aloha() {
    return (
        <div>
            <Header/>

                <div className="div_rec_general">

                    <div id="div_recomended_general">

                        <div className="ny dist_img">
                            <div className="div_bottom">New York</div>
                        </div>

                        <div className="tailandia dist_img">
                            <div className="div_bottom">Tailandia</div>
                        </div>

                        <div className="japon dist_img">
                            <div className="div_bottom">Japón</div>
                        </div>

                        <div className="kenia dist_img">
                            <div className="div_bottom">Kenia</div>
                        </div>

                    </div>
                </div>

        </div>

    );

}