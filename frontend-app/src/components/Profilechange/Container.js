import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ChangeProfile from "./Profilechange";

export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container
                className={"profilecontainer1"}
                maxWidth="500">

                <ChangeProfile/>

            </Container>
        </React.Fragment>
    );
}