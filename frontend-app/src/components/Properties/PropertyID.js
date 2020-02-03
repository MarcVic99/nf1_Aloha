import React, {useEffect, useReducer, useState} from "react";
import './Property.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {usePropertiesReducer} from "./Reducer";




const useStyles = makeStyles({
    card: {
        width: 395,
    },
    media: {
        height: 140,
    },
});

const PropertyID = () => {
    const [state, dispatch] = usePropertiesReducer();
    const classes = useStyles();
    const [id, setId] = useState([]);
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:80/api/property/${id}`)
            .then(response => response.json())
            .then(payload => {
                if (payload.status === 'succes') {
                    dispatch({
                        type: 'SEARCH_PROPERTIES_SUCCESS',
                        payload: payload.properties
                    });
                } else {
                    dispatch({
                        type: 'SEARCH_PROPERTIES_FAILURE',
                        error: payload
                    });
                }
            });

    }, [])

    return (

        <div>
            <div >
                <div className="PropertyContainer">
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    value={id}
                                    onChange={event => setId(event.target.value)}
                                    className={classes.media}
                                   // image={properties.image}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {properties.nameHeader}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {properties.id}.{properties.city}.rooms: {properties.rooms}.beds: {properties.beds}.toilets: {properties.toilets}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                    {properties.price} euros
                            </CardActions>
                        </Card>
                </div>
            </div>
        </div>
    );
};

export default PropertyID;