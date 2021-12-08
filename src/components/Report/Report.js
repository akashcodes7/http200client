import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ReportForm from './ReportForm';

const useStyles = makeStyles({
  root: {
    // position: 'relative',
    // top: '0',
    // width: '100%',
    // height: '100%',
    // backgroundColor: 'grey',
    // color: '#fff',
  },
});

const Report = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes}>
      <ReportForm />
    </Grid>
  );
};

export default Report;
