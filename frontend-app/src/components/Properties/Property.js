import React from "react";


const Property = ({ property }) => {

    return (
        <div className="properties">
            <p> Propiedad</p>
             {property.name_header}
            <p> Usuario</p>
             {property.user_id}
            <p> Address</p>
             {property.address}
        </div>
    );
};

export default Property;