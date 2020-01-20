import React from "react";


const Property = ({ property }) => {

    return (
        <div className="properties">
            <p> Propiedad</p>
             {property.nameHeader}
            <p> Precio</p>
             {property.price}
            <p> Address</p>
             {property.address}
        </div>
    );
};

export default Property;