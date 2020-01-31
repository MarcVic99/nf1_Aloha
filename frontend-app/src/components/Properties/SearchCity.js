import React, { useState } from "react";
import "./SearchCity.css";
import { Link } from 'react-router-dom';


const SearchCity = ({ searchCity }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = e => {
        setSearchValue(e.target.value);
    };

    const resetInputField = () => {
        setSearchValue("");
    };

    const callSearchFunction = e => {
        e.preventDefault();
        searchCity(searchValue);
        resetInputField();
    };

    return (
        <div className="search">
        <form>
            <input className="inputSearch"
                   value={searchValue}
                    onChange={handleSearchInputChanges}
                    type="text"
            />
            <input onClick={callSearchFunction} className="inputSearch2" type="submit" value="SEARCH"  />
        </form>
        </div>
    );
};

export default SearchCity;
