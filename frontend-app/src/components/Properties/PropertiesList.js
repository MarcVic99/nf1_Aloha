import React, {useEffect, useState} from 'react';
import './PropertiesList.css';
 import CommentsList from "./Comments";

  const PropertiesList = () => {
      const [properties, setProperties] = useState([]);

      useEffect(() => {
          async function fetchData() {
              setProperties(
                 await fetch('http://localhost/api/property')
                      .then(res => res.json())
                      .then(res => res.properties))

              }
          fetchData();

      }, []);



         return (
              <div className="property">
                  <div><h1>List of our better properties</h1></div>

                 {properties.map(property => (
                     <div className="mapDivProperties">
                        <div className="subDivProperties">
                             <div className="propertyDiv"> Title: <span>{property.title}</span> </div>
                             <div className="propertyDiv"> Ciudad: <span>{property.nameHeader}</span> </div>
                            <div className="propertyDiv"> Address: <span> {property.city}</span></div>
                            <div className="propertyDiv"> Dirección: <span>{property.address}</span></div>
                            <div className="propertyDiv"> Comentarios: <span>{property.address}</span></div>
                         <CommentsList/>
                        </div>
                         <div className="subDivProperties">

                             <div className="propertyDiv"> Cantidad de habitaciones: <span>{property.rooms}</span></div>
                             <div className="propertyDiv"> Cantidad de camas: <span>{property.beds}</span> </div>
                             <div className="propertyDiv"> Cantidad de baños: <span> {property.toilets}</span></div>

                             <CommentsList/>
                         </div>
                         <div className="subDivProperties">

                             <div className="propertyDiv"> Descripción: <span>{property.description}</span></div>
                             <div className="propertyDiv"> Precio: <span>{property.price}</span> </div>
                             <CommentsList/>
                         </div>


                     </div>



                ))}

             {/*    <div>{JSON.stringify(comments)}</div>;*/}
             </div>
          );

  };
export default PropertiesList;