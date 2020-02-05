import React, {useState} from "react";
import './Property.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CarouselItem from "./CarouselItem";


const useStyles = makeStyles({
    card: {
        width: 400,

    },
    media: {
        height: 170,
        marginBottom: 30,
    },
});

const Property = ({ property }) => {
    const [id, setId] = useState([]);
    const classes = useStyles();

    return (

        <div className="pack-rooms">
            <div className="mapDivProperties">
                <div className="subDivProperties" >
                    <a href={"/property/id"}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    value={id}
                                    onChange={event => setId(event.target.value)}
                                    className={classes.media}
                                    image={property.image}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    {/*<CarouselItem*/}
                                    {/*/>*/}
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
                            </CardActionArea>
                        </Card>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Property;