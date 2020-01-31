import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Questionnaire from "./questions";


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return['Paso 1: Empieza por lo esencial', 'Paso 2: Presenta tu espacio', 'Paso 3:Indica la disponibilidad'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:

        case 1:

        case 2:

        default:

    }

}

export default function HorizontalLabelPositionBelowStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [submit, setSubmit] = React.useState(false);

    const steps = getSteps();


    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
        if(setActiveStep === 2){};
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);

    };

    const handleFinish = () => {
        setSubmit(true);

    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <div className="button_style">

            <Questionnaire activeStep={activeStep} submit={submit} />

            </div>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                    <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        <div>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.backButton}
                            >
                                Back
                            </Button>
                            <Button variant="contained"
                                    color="primary"
                                    onClick={activeStep === steps.length - 1 ? handleFinish : handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>

                        </div>
                    </div>
                )}
            </div>

        </div>

    );

}