import React, {useState} from "react";
import './Property.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
    card: {
        width: 395,
    },
    media: {
        height: 140,
    },
});

const Property = ({ property }) => {
    const [id, setId] = useState([]);
    const classes = useStyles();

    return (

        <div>
            <div >
                <div className="PropertyContainer">
                    <a href={`property/${id}`}>
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
                                <Typography gutterBottom variant="h5" component="h2">
                                    {property.nameHeader}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {property.city}.rooms: {property.rooms}.beds: {property.beds}.toilets: {property.toilets}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                                {property.price} euros
                        </CardActions>
                    </Card>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Property;