import React from 'react';

//Importing material UI Components
import { AppBar, Toolbar, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Tabs, Tab } from '@mui/material';

//importing local Components
import logo from '../../assets/img/logo.png';

const useStyles = makeStyles((theme) => ({
  header: {
    height: '70px',
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  logoDiv: {
    width: '15%',
  },
}));
const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar disableGutters>
          <Grid className={classes.logoDiv}>
            <img src={logo} alt="manthan" />
          </Grid>
          <Tabs className={classes.tabContainer}>
            <Tab label="Home" className={classes.tab} />
            <Tab label="Make a Report" className={classes.tab} />
            <Tab label="Receive Feedback" className={classes.tab} />
            <Tab label="Contact" className={classes.tab} />
          </Tabs>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Navbar;
