import React, {useEffect, useState} from 'react';
//import './PropertiesList.css';
 import CommentsList from "./Comments";
import Navbar from "../Header/Navbar";

  const PropertiesList = () => {
      const [properties, setProperties] = useState([]);

      useEffect(() => {
          async function fetchData() {
              setProperties(
                 await fetch('http://localhost/api/property')
                      .then(res => res.json())
                      .then(res => res.properties))
              }
          fetchData() }, []);


         return (
              <div className="property">

                  <Navbar class="header2" />
                  <h1>List of our better properties</h1>
              <ul>
                 {properties.map(property => (
                     <div className="li">
                      <li key={property.id}>
                         <p> Propiedad</p>
                         {property.nameHeader}
                         <p> Ciudad</p>
                         {property.city}
                         <p> Address</p>
                         {property.address}
                         <p>Comentarios</p>
                         <CommentsList/>
                     </li>
                     </div>
                ))}
             </ul>
             {/*    <div>{JSON.stringify(comments)}</div>;*/}
             </div>
          );

  }
export default PropertiesList;