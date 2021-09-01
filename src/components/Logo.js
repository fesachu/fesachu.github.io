import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logoImage from '../images/logo.png';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin:theme.spacing(5),
        width: theme.spacing(15),
        height: theme.spacing(9),
      }
     
    },
    menu: {
      display: 'flex',
      '& > *': {
        width: theme.spacing(20),
        height: theme.spacing(5),
    },

    }
  }));

  const styles = {
    paperContainer: {
      backgroundImage: `url(${logoImage})`
    }

  };

  const buttonStyles = {
    root: {
      fontFamily: [
        'Varela Round', 'sans-serif'
      ].join(','),
      text-transform: none;
    }
  }
  
  const gridGroup = {
    root: {
      alignContent:'flex-end',
    }
  };
  export default function Variants() {
    const classes = useStyles();
  
    return (
      <Grid className ={classes.root} container spacing={3}>
        <Grid item xs>
          <div>
            <a href= "https://facebook.com"> 
            <img src={logoImage}></img>
          </a>
          </div>
        </Grid>
        <Grid  item container
    direction="row"
    alignItems="center"
    justify="flex-end" item xs> 
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button className = {buttonStyles.root} >home</Button>
          <Button className = {buttonStyles.root} >tech</Button>
          <Button className = {buttonStyles.root} >gaming</Button>
          <Button className = {buttonStyles.root} > design </Button>
          <Button className = {buttonStyles.root} > contact</Button>
</ButtonGroup>
        </Grid>
      </Grid>
     

     
    );
  }