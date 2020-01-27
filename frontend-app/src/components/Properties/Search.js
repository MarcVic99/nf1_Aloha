import React, {useReducer, useState} from "react";
import Calendario from "../Calendario";
import {initialState, reducer} from "./Reducer";



const Search = (props) => {

    const SEARCH_CITY = 'SEARCH_CITY';
    const SEARCH_DATE_FROM = 'SEARCH_DATE_FROM';
    const SEARCH_DATE_TO = 'SEARCH_DATE_TO';
    const RESET = 'RESET';

    const initialState = {
        city: '',
        dateFrom: new Date(),
        dateTo: new Date(),
    };

    const reducer = (state, action) => {
        const newState = {...state};

        switch (action.type) {
            case SEARCH_CITY:
                newState.city = action.city;
                return newState;
            case SEARCH_DATE_FROM:
                newState.dateFrom = action.dateFrom;
                return newState;
            case SEARCH_DATE_TO:
                newState.dateTo = action.dateTo;
                return newState;
            case RESET:
                return initialState;

            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const search = searchValue => {
        fetch(`http://127.0.0.1/api/search/property/city/${searchValue.city}/checkin/${searchValue.dateFrom}/checkout/${searchValue.dateTo}`)
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

    const handleSearchInputChangesCity = e => {
        dispatch({type: SEARCH_CITY, city: e.target.value});
    };

    const formatDate = date => {
        return `${date.getDay()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    };

    const handleSearchInputChangesDateFrom = e => {
        dispatch({type: SEARCH_DATE_FROM, dateFrom: e});
    };

    const handleSearchInputChangesDateTo = e => {
        dispatch({type: SEARCH_DATE_TO, dateTo: e});
    };

    const callSearchFunction = e => {
        e.preventDefault();
        const res = {
            city: state.city,
            dateFrom: formatDate(state.dateFrom),
            dateTo: formatDate(state.dateTo),
        };
        search(res);
        dispatch({type: RESET});
    };

    return (

        <div id="form_ini">
            <h1>Reserva alojamientos y experiencias únicas.</h1>
            <form>
                <div className="description_input">
                    <b>DÓNDE</b>
                </div>
                <div className="div_donde" placeholder="Dónde">
                    <input
                          value={state.city}
                           onChange={handleSearchInputChangesCity}
                           type="text" name="location" placeholder="Dónde" className={'inputlocation'}
                    />
                </div>

                <div className="llegada_salida">
                    <div className="description_input"

                         type="date"
                     ><b>LLEGADA</b>
                        <Calendario
                            value={state.dateFrom}
                            onChange={handleSearchInputChangesDateFrom}
                        />
                    </div>
                </div>
                <div className="llegada_salida">
                    <div className="description_input"
                         type="date"
                     ><b>SALIDA</b>
                        <Calendario
                            value={state.dateTo}
                            onChange={handleSearchInputChangesDateTo}
                        />
                    </div>
                </div>
                <div className="description_input"><b>HUÉPEDES</b>
                </div>
                <div className="input_huespedes">
                    <input type="text" name="location" placeholder="Huéspedes" className="inputhuespedes"/>
                </div>


                <div className="div_find">
                    <a href="/search/property">
                    <button id="find" type="submit" value="{SEARCH}"
                        onClick={callSearchFunction}><b>Buscar</b>
                    </button>
                    </a>
                </div>

            </form>

        </div>
    );
};

export default Search;

{/*<form className="search">*/}
{/*    <input*/}
{/*        value={searchValue}*/}
{/*        onChange={handleSearchInputChanges}*/}
{/*        type="text"*/}
{/*    />*/}
{/*    <input onClick={callSearchFunction} type="submit" value="SEARCH" />*/}
{/*</form>*/}
