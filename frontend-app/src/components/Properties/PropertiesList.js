import React, {useEffect, useState} from 'react';
import './PropertiesList.css';
import CommentsList from "./Comments";
import CardContent from "@material-ui/core/CardContent";
import {Card} from "@material-ui/core";

const user = JSON.parse(localStorage.getItem('user'));
console.log(user.id);
  const PropertiesList = () => {
      const [properties, setProperties] = useState([]);

      useEffect(() => {
          async function fetchData() {
              setProperties(
                 await fetch(`http://localhost/api/property/user/${user.id}`)
                      .then(res => res.json())
                      .then(res => res.properties))

              }
          fetchData();

      }, []);



         return (
              <div className="property">
                  <div className="mis_chozas"><h1>Las chozas de aloha</h1></div>

                 {properties.map(property => (
                     <div className="mapDivProperties">
                        <div className="subDivProperties">
                            <CardContent>
                             <div className="propertyDivTitle">  <span>{property.title}</span> </div>
                            </CardContent>
                            <CardContent>
                             <div className="propertyDiv"> Ciudad: <span>{property.city}</span> </div>
                            <div className="propertyDiv"> País: <span> {property.country}</span></div>
                            <div className="propertyDiv"> Dirección: <span>{property.address}</span></div>


                         <CommentsList/>


                         <div className="servicesDiv">

                             <div className="propertyDivRooms"> Habitaciones: <span>{property.rooms}</span></div>
                             <div className="propertyDivBeds"> Camas: <span>{property.beds}</span> </div>
                             <div className="propertyDivToilets"> Baños: <span> {property.toilets}</span></div>

                             <CommentsList/>
                         </div>


                             <div className="propertyDiv"> Descripción: <span>{property.description}</span></div>
                             <div className="propertyDiv"> Precio: <span>{property.price}</span> </div>
                            </CardContent>
                             <CommentsList/>
                         </div>


                     </div>



                ))}

             {/*    <div>{JSON.stringify(comments)}</div>;*/}
             </div>
          );

  };
export default PropertiesList;