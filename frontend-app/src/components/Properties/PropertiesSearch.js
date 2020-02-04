import React, { useReducer, useEffect } from "react";

import CommentsList from "./Comments";
import spinner from "./ajax-loader.gif"
import Search from "./Search";
import { usePropertiesReducer } from "./Reducer";
import "./PropertiesUser.css"
import Property from "./Property.js"
import Navbar from "../Header/Navbar";


const PropertiesSearch = (props) => {
    const { retrievedPropertiesRedirect } = props;


    return (
        <div>
            { retrievedPropertiesRedirect }
        </div>
    );
};

export default PropertiesSearch;