import React, {useReducer, useState} from "react";
import Calendario from "../Calendario";


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
const useSearchFormReducer = () => useReducer(reducer, initialState);

const Search = (props) => {


    const [state, dispatch] = useSearchFormReducer();

    const search = searchValue => {
        fetch(`http://127.0.0.1/api/search/property/city/${searchValue.city}/checkin/${searchValue.dateFrom}/checkout/${searchValue.dateTo}`)
            .then(response => response.json())
            .then(response => props.onNewProperties(response.properties));
    };

    const handleSearchInputChangesCity = e => {
        dispatch({type: SEARCH_CITY, city: e.target.value});
    };

    function appendLeadingZeroes(n){
        if(n <= 9){
            return "0" + n;
        }
        return n
    }

    let current_datetime = new Date()
    //console.log(current_datetime.toString());
    let formatted_date = current_datetime.getFullYear() + "-" + appendLeadingZeroes(current_datetime.getMonth() + 1) + "-" + appendLeadingZeroes(current_datetime.getDate())

    //console.log(formatted_date);


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
            dateFrom: appendLeadingZeroes(state.dateFrom),
            dateTo: appendLeadingZeroes(state.dateTo),
        };
        search(res);
        //dispatch({type: RESET});
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
                    <button id="find" type="submit" value="{SEARCH}"
                        onClick={callSearchFunction}><b>Buscar</b>
                    </button>

                </div>

            </form>

        </div>
    );
};

export default Search;

