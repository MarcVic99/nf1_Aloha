import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './ButtonCounter.css';




const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function ButtonSizes(props) {

    const classes = useStyles();
    const {count, setCount} = { ...props };

    return (

            <div className="main">
                <div className="subMain">

                    <div className="addButton">
                    <Fab size="small" color="primary" aria-label="add" className={classes.margin} onClick={ () => setCount(count+1)}>
                        <AddIcon />
                    </Fab>
                     </div>

                    <div className="result">{count}</div>

                    <div className="removeButton">
                    <Fab size="small" color="primary" aria-label="add" className={classes.margin} onClick={ () => {
                        if (count < 0)  {
                            setCount(0);
                        } else {
                            setCount(count-1);
                        }
                    }}>
                         <RemoveIcon/>
                    </Fab>
                    </div>
                </div>
            </div>
    );
}