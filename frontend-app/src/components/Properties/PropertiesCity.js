import React, { useReducer, useEffect } from "react";

import CommentsList from "./Comments";
import spinner from "./ajax-loader.gif"
import SearchCity from "./SearchCity";
import { initialState, reducerData } from "./Reducer";
import "./PropertiesList.css"
import Property from "./Property.js"
import Navbar from "../Header/Navbar";


const PropertiesCity = () => {
    const [state, dispatch] = useReducer(reducerData, initialState);
    const { properties, errorMessage, loading } = state;

    useEffect(() => {
        fetch('http://127.0.0.1:80//api/search/city/barcelona')
            .then(response => response.json())
            .then(jsonResponse => {
                dispatch({
                    type: "SEARCH_PROPERTIES_SUCCESS",
                    payload: jsonResponse.SearchCity
                });
            });
    }, []);


    const searchCity = searchValue => {
        dispatch({
            type: "SEARCH_PROPERTIES_REQUEST"
        });

        fetch(`http://127.0.0.1:80/api/search/city/${searchValue}`)
            .then(response => response.json())
            .then(payload => {
                if (payload.status === 'succes') {
                    dispatch({
                        type: 'SEARCH_PROPERTIES_SUCCESS',
                        payload: payload.properties
                    });
                } else {
                    dispatch({
                        type: 'SEARCH_PROPERTIES_FAILURE',
                        error: payload
                    });
                }
            });
    };

    let retrievedProperties = <div />;
    if (loading && !errorMessage) {
        retrievedProperties = <img className="spinner" src={spinner} alt="Loading spinner" />;
    } else if (errorMessage) {
        retrievedProperties = <div className="errorMessage">{errorMessage}</div>;
    } else if (properties) {

        retrievedProperties = properties.map((property, index) => (
            <Property key={`${index}`} property={property} />
        ));
    }

    return (
        <div>
        <Navbar className="header2"/>

        <div className="propertiesCity">
            <div className="m-container">
                <SearchCity searchCity={searchCity}/>
                <div className="properties">{retrievedProperties}</div>
            </div>
        </div>
        </div>
    );
};

export default PropertiesCity;