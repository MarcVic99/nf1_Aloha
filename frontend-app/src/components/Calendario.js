import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers({value, onChange}) {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    return (

        <MuiPickersUtilsProvider utils={DateFnsUtils}>

            <Grid container justify="space-around">
                <KeyboardDatePicker
                    disableToolbar
                    //label="dd/MM/yyyy"
                    variant="inline"
                    format="yyyy/MM/dd"
                    margin="normal"
                    id="date-picker-inline"
                    //value={selectedDate}
                    value={value}
                    disablePast={true}
                    //onChange={handleDateChange}
                    onChange={onChange}
                                    />
            </Grid>
        </MuiPickersUtilsProvider>

    );

}
