
import React, {useEffect, useReducer, useState} from 'react';
import './PropertiesList.css'
import spinner from "./ajax-loader.gif"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropertiesCity from "./PropertiesCity";


const useStyles = makeStyles({
    card: {
        width: 395,
    },
    media: {
        height: 140,
    },
});




const SET_PROPERTY_DATA = 'SET_PROPERTY_DATA';
const SET_ERROR = 'SET_ERROR';

const initialState = {
    properties: '',
    error: false,
};

const propertyReducer = (state = initialState, action) => {
    const newState = { ...state };
    const { type } = { ...action };

    if (type === SET_PROPERTY_DATA) {
        newState.properties = action.data;
    }
    if (type === SET_ERROR) {
        newState.error = action.error;
    }
    return newState;
};


/**
 * @return {boolean}
 */
function PropertiesList(props) {
    const history = props.history;
    const classes = useStyles();
    const [state, dispatch] = useReducer(propertyReducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'http://localhost/api/property';
            const options = {
                method: 'GET',
                headers: new Headers({
                    Accept: 'application/json',
                    'Access-Control-Allow-Headers': 'Authorization',
                    'Content-Type': 'application/json',
                }),
                mode: 'cors',
            };

            return fetch(url, options)
                .then(response => {
                    if (response.status === 200) {
                        return response.json();
                    }
                    return Promise.reject(response.status);
                })
                .then(data => {
                    dispatch({ type: SET_PROPERTY_DATA, data: data.properties });
                })
                .catch(error => dispatch({ type: SET_ERROR, error: true }));
        };

        dispatch({ type: SET_ERROR, error: false });

        fetchData();

    }, []);

    const hasData = state.properties !== '';
    if (hasData) {
        return(
            <div>
                <header className="headerProperty">
                  <PropertiesCity/>
                </header>
                <div >{state.properties.map(property =>
                    <div className="PropertyContainer">
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={property.image}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {property.nameHeader}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {property.city}.rooms: {property.rooms}.beds: {property.beds}.toilets: {property.toilets}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    {property.price} €
                                </Button>
                            </CardActions>
                        </Card>
                    </div>)}
                </div>
            </div>
        );
    }
    return (
        <div>
            <img className="spinner" src={spinner} alt="Loading spinner" />
        </div>
    );
}

export default PropertiesList;