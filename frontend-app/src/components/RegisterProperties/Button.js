import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

export default function TriggersTooltips() {
    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = (props) => {
        setOpen(true);
    };

    return (
        <div>
            <Grid container justify="center">
                <Grid item>
                    <Tooltip disableFocusListener title="Add">
                        <Button>Hogar</Button>
                    </Tooltip>
                </Grid>

                <Grid item>
                    <ClickAwayListener onClickAway={handleTooltipClose}>
                        <div>
                            <Tooltip
                                PopperProps={{
                                    disablePortal: true,
                                }}
                                onClose={handleTooltipClose}
                                open={open}
                                disableFocusListener
                                disableHoverListener
                                disableTouchListener
                                title="Add"
                            >
                                <Button onClick={handleTooltipOpen}>Click</Button>
                            </Tooltip>
                        </div>
                    </ClickAwayListener>
                </Grid>
            </Grid>
        </div>
    );
}
