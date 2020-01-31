import React, { useReducer, useEffect } from "react";


import CommentsList from "./Comments";
import spinner from "./ajax-loader.gif"
import Search from "./Search";
import { initialState, reducer } from "./Reducer";
import "./PropertiesList.css"
import Property from "./Property.js"


const PropertiesSearch = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { properties, errorMessage, loading } = state;

    useEffect(() => {
        fetch('http://127.0.0.1/api/search/city/barcelona')
            .then(response => response.json())
            .then(jsonResponse => {
                dispatch({
                    type: "SEARCH_PROPERTIES_SUCCESS",
                    payload: jsonResponse.Search
                });
            });
    }, []);



    let retrievedProperties = <div />;
    if (loading && !errorMessage) {
        retrievedProperties = <img className="spinner" src={spinner} alt="Loading spinner" />;
    } else if (errorMessage) {
        retrievedProperties = <div className="errorMessage">{errorMessage}</div>;
    } else if (properties) {
        retrievedProperties = properties.map((property, index) => (
            <Property key={`${index}-${property.nameHeader}-${property.price}-${property.address}`} property={property} />
        ));
    }

    return (
        <div className="App">
            <div className="m-container">
                <header className="App-header">
                    <h2>PropertiesList</h2>
                </header>
                <Search/>
                <p className="App-intro">Our better properties</p>
                <div className="properties">{retrievedProperties}</div>
            </div>
        </div>
    );
};

export default PropertiesSearch;
