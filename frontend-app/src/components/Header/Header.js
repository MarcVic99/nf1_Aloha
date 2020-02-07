import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../Aloha.css"
import PropertiesList from "../Properties/PropertiesList";
import ModalProfile from "../Profilechange/ModalProfile";
import Search from "../Properties/Search";
import {usePropertiesReducer} from "../Properties/Reducer";
import spinner from "../Properties/ajax-loader.gif";
import Property from "../Properties/Property";
import PropertiesSearch from "../Properties/PropertiesSearch";

const Header = () => {

    const [state, dispatch] = usePropertiesReducer();
    const { properties, errorMessage, loading } = state;

    useEffect(() => {
        fetch('http://api.aloha-app.xyz/api/search/city/barcelona')
            .then(response => response.json())


    }, [])


    let retrievedProperties = <div/>;
    if (loading && !errorMessage) {
       // retrievedProperties = <img className="spinner" src={spinner} alt="Loading spinner"/>;
    } else if (errorMessage) {
        retrievedProperties = <div className="errorMessage">{errorMessage}</div>;
    } else if (properties) {

        retrievedProperties = properties.map((property) => (
            <Property key={`${property.id}`} property={property}/>
        ));
    }


    return (
    <div className="section_head">

                <Navbar class="header1"/>

            <div className="container_form">
                <div className="container_form2">

                    <div className="propertiesCity">
                        <div className="m2-container">

                                <Search onNewProperties={properties => {
                                    dispatch({
                                        type: "SEARCH_PROPERTIES_SUCCESS",
                                        payload: properties
                                    });
                                }}/>

                        </div>
                        <div className="propertiesheader">
                            <div className="properties">{retrievedProperties}</div>
                        </div>
                    </div>
                </div>
            </div>
</div>


    );
};

export default Header;