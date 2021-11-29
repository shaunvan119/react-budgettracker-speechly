import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider, List } from '@material-ui/core';

import useStyles from './styles';
import Form from './Form/Form';
import CList from './List/CList';


const Main = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly"/>
            <CardContent>
            <Typography align="centre" variant="h5">Total Balance $100</Typography>
            <Typography variant="subtitle1" style={{ lineHeight: '1.5rem', marginTop: '20px'}}></Typography>
            <Divider/>
            <Form/>
        </CardContent>
             <CardContent className={classes.CardContent}>
             <Grid container spacing={2}>
             <Grid item xs={12}>
             <CList/>
             </Grid>
          </Grid>
        </CardContent>
    </Card>
  );
}

export default Main
