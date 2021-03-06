import {useReducer} from "react";

export const initialState = {
    loading: true,
    properties: [],
    errorMessage: null
};

export const reducerData = (state, action) => {
    switch (action.type) {
        case "SEARCH_PROPERTIES_REQUEST":
            return {
                ...state,
                loading: true,
                errorMessage: null
            };
        case "SEARCH_PROPERTIES_SUCCESS":
            return {
                ...state,
                loading: false,
                properties: action.payload,

            };
        case "SEARCH_PROPERTIES_FAILURE":
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            };
        default:
            return state;
    }
};
export const usePropertiesReducer = () => useReducer(reducerData, initialState);
