
import React, {useEffect, useReducer, useState} from 'react';
import './PropertiesList.css'
import spinner from "./ajax-loader.gif"
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import PropertiesCity from "./PropertiesCity";
import CarouselItem from "./CarouselItem";
import CommentsList from "./Comments";


const useStyles = makeStyles({
    card: {
        width: 395,
    },
    media: {
        height: 140,
    },
});




const SET_PROPERTY_DATA = 'SET_PROPERTY_DATA';
const SET_ERROR = 'SET_ERROR';

const initialState = {
    properties: '',
    error: false,
};

const propertyReducer = (state = initialState, action) => {
    const newState = { ...state };
    const { type } = { ...action };

    if (type === SET_PROPERTY_DATA) {
        newState.properties = action.data;
    }
    if (type === SET_ERROR) {
        newState.error = action.error;
    }
    return newState;
};


/**
 * @return {boolean}
 */
function PropertiesList(props) {
    const history = props.history;
    const classes = useStyles();
    const [state, dispatch] = useReducer(propertyReducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'http://api.aloha-app.xyz/api/property';
            const options = {
                method: 'GET',
                headers: new Headers({
                    Accept: 'application/json',
                    'Access-Control-Allow-Headers': 'Authorization',
                    'Content-Type': 'application/json',
                }),
                mode: 'cors',
            };

            return fetch(url, options)
                .then(response => {
                   if (response.status === 200) {
                        return response.json();
                    }
                    return Promise.reject(response.status);
                })
                .then(data => {
                    dispatch({ type: SET_PROPERTY_DATA, data: data.properties });
                })
                .catch(error => dispatch({ type: SET_ERROR, error: true }));
        };

        dispatch({ type: SET_ERROR, error: false });

        fetchData();

    }, []);

    const hasData = state.properties !== '';
    if (hasData) {
        return(
            <div id="main">
                <header className="headerProperty">
                  <PropertiesCity/>
                </header>
                <div >{state.properties.map(property => (


                    <div className="pack-rooms">
                        <div className="mapDivProperties">
                            <div className="subDivProperties">
                                <CardContent>
                                    <CarouselItem />
                                    <div className="propertyDivTitle">
                                        <span>{property.title}</span>
                                    </div>
                                    <div className="propertyDiv">
                                        {" "}
                                        <span>{property.description}</span>
                                    </div>
                                </CardContent>
                                <div className="propertydetails">
                                    <CardContent className="cardContent">
                                        <h3>Dirección</h3>
                                        <div className="propertyDiv">
                                            {" "}
                                            <span>{property.address}</span>
                                        </div>
                                        <div className="propertyDiv">
                                            {" "}
                                            <span>{property.city}</span>
                                        </div>
                                        <div className="propertyDiv">
                                            {" "}
                                            <span> {property.country}</span>
                                        </div>
                                    </CardContent>

                                    <CardContent className="cardContent">
                                        <h3>Servicios</h3>
                                        <div>
                                            {" "}
                                            Habitaciones: <span>{property.rooms}</span>
                                        </div>
                                        <div>
                                            {" "}
                                            Camas: <span>{property.beds}</span>
                                        </div>
                                        <div>
                                            {" "}
                                            Baños: <span> {property.toilets}</span>
                                        </div>
                                    </CardContent>
                                </div>
                                <CardContent>
                                    <div className="propertyDiv">
                                        {" "}
                                        <h3>Precio:</h3> <span>{property.price} EUR/noche</span>
                                    </div>
                                </CardContent>
                                <CommentsList />
                            </div>
                        </div>
                    </div>
                ))}


                </div>
            </div>
        );
    }
    return (
        <div>
            <img className="spinner" src={spinner} alt="Loading spinner" />
        </div>
    );
}

export default PropertiesList;