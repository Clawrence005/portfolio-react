import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import { red } from '@material-ui/core/colors';
// import { createMuiTheme } from '@material-ui/core/styles';

const styles = {
    root: {
        flexGrow: 1,
        // backgroundColor: red,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function Footer(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                    </IconButton>
                    <Typography variant="h6" align='center' color="inherit" className={classes.grow}> Copyright 2019
          </Typography>

                </Toolbar>
            </AppBar>
        </div >
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
