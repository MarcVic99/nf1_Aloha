// import React, {useEffect, useState} from 'react';
// import Grid from '@material-ui/core/Grid';
// import PplCard from "../PplCard";
//
// function PropertiesList() {
//     const [users, setUsers] = useState([])
//     useEffect(()=>{
//         async function fetchData() {
//             setUsers(
//                 await fetch('https://reqres.in/api/users')
//                     .then(res => res.json())
//                     .then(res => res.data))}
//         fetchData() },[])
//
//
//     return (
//         <div className="App">
//             <h3>THE TRUE BEAUTY OF MATERIAL UI</h3>
//             <Grid container spacing={10}
//                   style={{padding: '24px'}}
//             >
//                 {users.map( users =>
//                     <Grid key={users.id} item
//                           xs={12} sm={6} md={4} lg={4} xl={3}
//                     >
//                         <PplCard
//                             key={users.id} email={users.email} firstname={users.first_name}
//                             lastname={users.last_name} avatar={users.avatar}
//                         />
//                     </Grid>
//                 )}
//             </Grid>
//         </div>);
// }
// export default PropertiesList;



// import React, {useEffect, useState} from 'react';
// import CommentsList from "./Comments";
//
//  const PropertiesList = () => {
//      const [properties, setProperties] = useState([]);
//
//      useEffect(() => {
//          async function fetchData() {
//              setProperties(
//                 await fetch('http://localhost/api/property')
//                      .then(res => res.json())
//                      .then(res => res.properties))
//              }
//          fetchData() }, []);
//
//
//
//          return (
//              <div>
//              <ul>
//                  {properties.map(property => (
//                      <li key={property.id}>
//                          <p> Propiedad</p>
//                          {property.name_header}
//                          <p> Usuario</p>
//                          {property.user_id}
//                          <p> Address</p>
//                          {property.address}
//                          <p>Comentarios</p>
//                          <CommentsList/>
//                      </li>
//                  ))}
//              </ul>
//              {/*    <div>{JSON.stringify(comments)}</div>;*/}
//              </div>
//          );
//
//  }
//
// export default PropertiesList;

import React, { useReducer, useEffect } from "react";

import CommentsList from "./Comments";
import spinner from "./ajax-loader.gif"
import Search from "./Search";
import { initialState, reducer } from "./Reducer";
import axios from "axios";
import "./PropertiesList.css"
import Property from "./Property.js"


const PropertiesList = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { properties, errorMessage, loading } = state;

    useEffect(() => {
        axios.get('http://127.0.0.1:80/api/search/location/barcelona')
            .then(jsonResponse => {
                dispatch({
                    type: "SEARCH_PROPERTIES_SUCCESS",
                    payload: jsonResponse.state.properties.Search
                });
            });
    }, []);
    console.log(state);
    // useEffect(() => {
    //     async function fetchData() {
    //
    //         await fetch('http://localhost/api/property')
    //
    //             .then(jsonResponse => {
    //                 dispatch({
    //                     type: "SEARCH_PROPERTIES_SUCCESS",
    //                     payload: jsonResponse.data.Search
    //                 });
    //             });
    //     }
    //       fetchData()  }, []);


    const search = searchValue => {
        dispatch({
            type: "SEARCH_PROPERTIES_REQUEST"
        });

        axios(`http://127.0.0.1:80/api/search/location/${searchValue}`)
            .then(jsonResponse => {
                if (jsonResponse.data.Response === "True") {
                    dispatch({
                        type: "SEARCH_PROPERTIES_SUCCESS",
                        payload: jsonResponse.data.Search
                    });
                } else {
                    dispatch({
                        type: "SEARCH_PROPERTIES_FAILURE",
                        error: jsonResponse.data.Error
                    });
                }
            }
        );
    };



    const retrievedProperties =
        loading && !errorMessage ? (
              <img className="spinner" src={spinner} alt="Loading spinner" />
        ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
        ) : (
            properties.map((property, index) => (
                <Property key={`${index}-${property.name_header}-${property.user_id}-${property.address}`} property={property} />
            ))
        );
    return (
        <div className="App">
            <div className="m-container">
                <header className="App-header">
                    <h2>PropertiesList</h2>
                </header>
                <Search search={search}/>
                <p className="App-intro">Sharing a few of our better properties</p>
                <div className="properties">{retrievedProperties}</div>
            </div>
        </div>
    );
};

export default PropertiesList;




