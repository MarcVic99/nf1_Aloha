import "./PropertiesUser.css";

import React, { useEffect, useState } from "react";

import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CarouselItem from "./CarouselItem";
import CommentsList from "./Comments";
import Navbar from "../Header/Navbar";

const user = JSON.parse(localStorage.getItem("user"));

const PropertiesUser = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setProperties(
        await fetch(`http://localhost/api/property/user/${user.id}`)
          .then(res => res.json())
          .then(res => res.properties)
      );
    }

    fetchData();
  }, []);

  return (
      <div id="main">
      <Navbar class="header2" />

      <div className="main_div">
        <div className="intro h1">
          <h1>Mis propiedades</h1>
        </div>

        {properties.map(property => (
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
};
export default PropertiesUser;
